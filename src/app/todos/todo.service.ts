import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; // app.module , sin el Module
import { map, Subject } from 'rxjs';

// decorador
@Injectable({
  providedIn: 'root', // se puede usar este servicio dentro de cualquier componente
})
export class TodoService {
  // postSource = new Subject();
  postSource = new Subject<number[]>();
  // post$ = this.postSource.asObservable()
  post$ = this.postSource.asObservable();
  /* .pipe(
    // map((res) => {
    map((res: number[]) => {
      // res = ['uno', 'dos', 'tres'];
      console.log(res); // undefined
      // return res;
      return res.filter((num) => num > 3); // filtrar > 3
    })
  ); // tuberia */

  constructor(private http: HttpClient) {}

  getTodos() {
    return this.http.get('https://jsonplaceholder.typicode.com/todos');
  }

  // get params
  /* getComments(postId: number) {
    return this.http.get(
      `https://jsonplaceholder.typicode.com/comments?postId=${postId}`
    );
  } */
  // otra forma
  getComments(postId: number) {
    const params = {
      // postId: postId
      postId,
      // etc,
      //etc,
    };
    return this.http.get(`https://jsonplaceholder.typicode.com/comments`, {
      params,
    });
  }
  // otra forma, recibiendo los params
  /* getComments(params) {
    return this.http.get(`https://jsonplaceholder.typicode.com/comments`, {
      params,
    });
  } */

  getPosts() {
    // observable
    // body ejemplo
    const body = {
      id: 1,
      comment: 'Hola',
      date: '2023-11-24',
    };
    return this.http.post(`https://jsonplaceholder.typicode.com/posts`, body);
    // return this.http.delete(`https://jsonplaceholder.typicode.com/posts`, body);
  }
}
