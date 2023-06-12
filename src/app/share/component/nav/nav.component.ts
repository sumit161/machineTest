import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
  istrue:boolean=false
  constructor() { }

  ngOnInit(): void {
  }
  Onclick(eve:any){
    console.log(eve);

  }
  Onul(){
    console.log("hello");

  }
}
