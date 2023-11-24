import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; // app.module , sin el Module

// decorador
@Injectable({
  providedIn: 'root', // se puede usar este servicio dentro de cualquier componente
})
export class TodoService {
  constructor(private http: HttpClient) {}

  getTodos() {
    return this.http.get('https://jsonplaceholder.typicode.com/todos');
  }
}
