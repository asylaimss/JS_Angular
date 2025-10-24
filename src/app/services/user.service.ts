import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, of } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class UserService {
  private apiUrl = 'https://jsonplaceholder.typicode.com/users';

  constructor(private http: HttpClient) {}

  getUsers() {
    return this.http.get<any[]>(this.apiUrl).pipe(
      catchError((err) => {
        console.error('Error fetching users', err);
        return of([]);
      })
    );
  }
}