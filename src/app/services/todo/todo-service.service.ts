import { Injectable } from '@angular/core';
import { Todos } from '../../data/models/Todos';
import { TODOS } from '../../data/mocks/mock-todos';
import { TodoModel } from '../../data/classes/todo';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TodoServiceService {

  private todos: Todos[];
  private newId: number

  constructor() {
    this.todos = TODOS
    this.newId = this.todos.length+1
  };

  public getTodos(): Todos[] {
    console.log(this.todos.length)
    return this.todos
  }

  public addTodo(title: String, category: String, description: String, imgSrc: String) {
    let todo = new TodoModel(this.newId, title, category, description, imgSrc);
    this.todos.push(todo);
    this.newId++;
  }

  public getTodo(id: Number): Observable<Todos> {
     return of(TODOS.find(hero => hero.id === id));
  }

  public updateTodo(id: Number) {

  }

  public removeTodo(id: Number): void {
    this.todos = this.todos.filter((todo) => todo.id != id)
  }
}
