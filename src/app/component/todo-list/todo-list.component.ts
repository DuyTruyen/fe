import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { TodoListModel } from 'src/app/model/todolist.model';
import { TodoListService } from 'src/app/services/todo-list.service';
import { NzNotificationService } from 'ng-zorro-antd/notification';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {
  listOfData:TodoListModel[]= [
  ]

  value='';
  isVisible=false;
  validateForm;
  defaultValueForm
  constructor(private todoListSv:TodoListService,private fb:FormBuilder,private notification: NzNotificationService) {
    this.validateForm=this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      description: ['', [Validators.required, Validators.minLength(3)]],
      recurrence: ['none', [Validators.required]],
      isImportant: [false, [Validators.required]],
    })
    this.defaultValueForm={...this.validateForm.value};
  }

  ngOnInit(): void {
    this.getAll();
  }

  showAddModal(){
    this.validateForm.patchValue(this.defaultValueForm);
    this.isVisible=true;

  }
  showEditModal(data:any){
    this.validateForm.reset();
    this.isVisible=true;
    this.validateForm.patchValue(data)
  }
  handleCancel(){
    this.isVisible=false;
  }

  handleOk(){
    this.add({...this.validateForm.value,isFinished:false});
  }
  getAll(){
    this.todoListSv.getAll().subscribe((res)=>{
      this.listOfData=res;
    });
  }
  add(payload:any){
    payload.id='00000000-0000-0000-0000-000000000000';
    payload.dateCreated=new Date().toISOString();
    this.todoListSv.add(payload).subscribe((res)=>{
      this.createNotification('success','','Tạo thành công');
      this.isVisible=false;
      this.getAll();
    });
  }
  update(id:any,payload:any){
    this.todoListSv.update(id,payload).subscribe((res)=>{
      this.listOfData=res;
    });
  }
  get(id:string){
    this.todoListSv.getAll().subscribe((res)=>{
      this.listOfData=res;
    });
  }
  createNotification(type: string,title:string,content:string): void {
    this.notification.create(
      type,
      title,
      content
    );
  }
}
