import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoCatListComponent } from './todo-cat-list.component';
import { SharedModule } from 'src/app/shared/shared.module';



@NgModule({
  declarations: [TodoCatListComponent],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports:[TodoCatListComponent]
})
export class TodoCatListModule { }
