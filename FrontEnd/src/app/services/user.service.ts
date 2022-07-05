import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {map} from 'rxjs/operators';
import { Observable } from 'rxjs';
import { User } from '../model/user';
@Injectable({
  providedIn: 'root'
})
export class UserService {

constructor() { }

addUser(user: User)
{
  let users : User[] = [] ;
  if(localStorage.getItem('Users'))
  {
    users = JSON.parse(localStorage.getItem('Users') as string)
    users.push(user)
  }

  else{
    users.push(user);
     }
  localStorage.setItem('Users',JSON.stringify(users));
}



}
