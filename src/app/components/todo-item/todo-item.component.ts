import { Component, OnInit, Input } from '@angular/core';
import { Todos } from '../../data/models/Todos';
import { Router, ActivatedRoute } from '@angular/router';
import { TodoServiceService } from '../../services/todo/todo-service.service';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {

  @Input()
  public todo: Todos;

  constructor(public todoService: TodoServiceService) { }

  ngOnInit(): void {
  }

  public removeTodo(): void {
    this.todoService.removeTodo(this.todo.id)
  }

}
