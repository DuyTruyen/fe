import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzInputModule } from 'ng-zorro-antd/input';
import { FormsModule } from '@angular/forms';
import { NzButtonModule } from 'ng-zorro-antd/button';




@NgModule({
  declarations: [],
  imports: [
    NzTableModule,
    CommonModule,
    NzInputModule,
    FormsModule,
    NzButtonModule,
  ],
  exports:[
    NzTableModule,
    NzInputModule,
    FormsModule,
    NzButtonModule
  ]
})
export class SharedModule { }
