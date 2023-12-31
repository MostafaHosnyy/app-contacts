import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css']
})
export class AddTodoComponent implements OnInit {
  @Output() addTodo: EventEmitter<any> = new EventEmitter();
  name: string;
  phone:number;

  constructor() {}

  ngOnInit(): void {}

  onSubmit() {
    const todo = {
      name: this.name,
      phone: this.phone,
      completed: false
    };

    this.addTodo.emit(todo);
  }
}
