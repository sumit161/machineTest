import { Component, OnInit, ViewChild } from '@angular/core';
import { BankingAllService } from '../../service/banking-all.service';
import { Iusers } from '../../model/userInterface';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
})
export class TableComponent implements OnInit {
  search!: string;
  BankingArr!: Array<Iusers>;
  code: any = Math.random().toExponential(3);
  create_UUID() {
    var dt = new Date().getTime();
    var uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(
      /[xy]/g,
      function (c) {
        var r = (dt + Math.random() * 16) % 16 | 0;
        dt = Math.floor(dt / 16);
        return (c == 'x' ? r : (r & 0x3) | 0x8).toString(16);
      }
    );
    return uuid;
  }

  constructor(private _bankingAllService: BankingAllService) {}

  displayedColumns = [
    'TranactionCode',
    'Name',
    'InvestAmount',
    'InvestRate',
    'option',
  ];
  dataSource!: MatTableDataSource<any>;
  @ViewChild('paginator') paginator!: MatPaginator;
  @ViewChild('MatSort') matSort!: MatSort;

  ngOnInit(): void {
    this._bankingAllService.GetAllUsers().subscribe((res) => {
      this.BankingArr = res;
      console.log(res);
      this.dataSource = new MatTableDataSource(res);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.matSort;
    });
  }

  filterData($event: any) {
    this.dataSource.filter = $event.target.value;
  }
}
