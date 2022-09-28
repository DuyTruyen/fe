import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoCatListComponent } from './todo-cat-list.component';

describe('TodoCatListComponent', () => {
  let component: TodoCatListComponent;
  let fixture: ComponentFixture<TodoCatListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TodoCatListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TodoCatListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
