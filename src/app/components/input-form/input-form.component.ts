import { Component, OnInit } from '@angular/core';
import { TODOS } from '../../data/mocks/mock-todos';
import { TodoServiceService } from 'src/app/services/todo/todo-service.service';
import { TodoModel } from 'src/app/data/classes/todo';
import { Todos } from 'src/app/data/models/Todos';

@Component({
  selector: 'app-input-form',
  templateUrl: './input-form.component.html',
  styleUrls: ['./input-form.component.css']
})
export class InputFormComponent implements OnInit {
  public todoTitle: String;
  public todoDesc: String;
  public todoImg: String;

  inputtodo = {
    title: 'Example todo',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec et libero eu nisi tempor consectetur. Nulla dignissim eros at ex ultricies efficitur',
    isDone: false,
    imgSrc: 'https://image.freepik.com/free-photo/beach-background-with-beach-elements-copyspace_23-2147836084.jpg'
  }

  constructor(private todoService: TodoServiceService) {
      this.todoTitle = this.inputtodo.title
      this.todoDesc = this.inputtodo.description
      this.todoImg = this.inputtodo.imgSrc
  }


  ngOnInit(): void {
  }

  public async addTodo(event): Promise<void> {
    this.todoService.addTodo(this.todoTitle, this.todoDesc, this.todoImg);
    this.todoTitle = this.inputtodo.title
    this.todoDesc = this.inputtodo.description
    this.todoImg = this.inputtodo.imgSrc
    console.log('Saved', event)
  }

}
