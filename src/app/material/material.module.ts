import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';


const MaterialArr = [
  MatTableModule,
  MatPaginatorModule,
  MatSortModule,
  MatInputModule,
  MatButtonModule,
  MatIconModule,
  MatCardModule
];

@NgModule({
  declarations: [],
  imports: [CommonModule, ...MaterialArr],
  exports: [...MaterialArr],
})
export class MaterialModule {}
