import { Component, OnInit, Input } from '@angular/core';
import { Todos } from 'src/app/data/models/Todos';
import { ActivatedRoute } from '@angular/router';
import { TodoServiceService } from 'src/app/services/todo/todo-service.service';

@Component({
  selector: 'app-todo-detail',
  templateUrl: './todo-detail.component.html',
  styleUrls: ['./todo-detail.component.css']
})
export class TodoDetailComponent implements OnInit {
  @Input() todo: Todos

  constructor(private route: ActivatedRoute, private todoService: TodoServiceService) { }

  ngOnInit(): void {
    this.loadTodoDetail()
  }

  loadTodoDetail() {
    const todoId = +this.route.snapshot.paramMap.get('id')
    this.todoService.getTodo(todoId)
      .subscribe(todo => this.todo = todo)
  }

}
