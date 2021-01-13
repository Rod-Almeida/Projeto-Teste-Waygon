import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserListService {

  userListURL = 'https://jsonplaceholder.typicode.com/users'

  constructor(private http: HttpClient) { }

  createList (){
  return this.http.get<any[]>(this.userListURL)
  }

}
