import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {map} from 'rxjs/operators';
import { IProperty } from '../property/IProperty.interface';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class UserService {

constructor() { }

addUser(user: any)
{
  let users = [] ;
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
