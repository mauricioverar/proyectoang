import { Component, OnInit } from '@angular/core';
import { TodoService } from '../todo.service';
import { map, tap } from 'rxjs';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss'],
})
export class TodoComponent implements OnInit {
  constructor(private todoService: TodoService) {}

  ngOnInit(): void {
    this.todoService.post$
      .pipe(
        // map((res) => {
        map((res: number[]) => {
          // res = ['uno', 'dos', 'tres'];
          console.log(res); // undefined
          // return res;
          return res.filter((num) => num > 3); // filtrar > 3
        }),
        tap((res) => {
          console.log('desde tap', res);
        })
      ) // tuberia
      .subscribe((res) => {
        console.log('nueva data', res);
      });
  }
}
