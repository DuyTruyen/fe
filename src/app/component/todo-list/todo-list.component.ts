import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {
  listOfData= [
    {
      isPiority: true,
      name: 'Ngủ',
      description: 32,
      address: 'New York No. 1 Lake Park'
    },
    {
      isPiority: true,
      name: 'Ngủ',
      description: 42,
      address: 'London No. 1 Lake Park'
    },
    {
      isPiority: true,
      name: 'Ngủ',
      description: 32,
      address: 'Sidney No. 1 Lake Park'
    }
  ];

  value='';
  constructor() { }

  ngOnInit(): void {
  }

}
