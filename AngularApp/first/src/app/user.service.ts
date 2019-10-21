import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from  'rxjs';
import { IUser } from './user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private _url : string = 'https://jsonplaceholder.typicode.com/users';
  constructor(private _http : HttpClient) { }

  getUsers() : Observable<IUser[]>{
    return this._http.get<IUser[]>(this._url);
  }
}
