import { Component, OnInit } from '@angular/core';
import { TodoService } from './todo.service';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss'],
})
export class TodosComponent implements OnInit {
  todos: any[] = []; // any para Ts (solo por motivo de enseñanza)

  constructor(private todoService: TodoService) {}

  ngOnInit(): void {
    this.todoService.getTodos().subscribe((res: any) => {
      // console.log(res);
      this.todos = res;
      console.log(this.todos);
    });

    this.todoService.getComments(1).subscribe((res) => {
      console.log('Comments', res);
    });

    this.todoService.getPosts().subscribe((res) => {
      console.log('Posts:', res);
    });
  }
}
