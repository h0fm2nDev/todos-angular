import { Component, OnInit } from '@angular/core';
import { TodoServiceService } from '../../services/todo/todo-service.service'
import { Todos } from '../../data/models/Todos';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
  todos: Todos[]

  constructor(public todoService: TodoServiceService) { }

  ngOnInit(): void {
    this.getTodos()
  }

  getTodos(): void {
    this.todos = this.todoService.getTodos()
  }

}
