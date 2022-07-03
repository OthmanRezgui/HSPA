import { Injectable } from '@angular/core';
import { retry } from 'rxjs/operators';
import { User } from '../model/user';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

constructor() { }

authUser(user : User)
{
  let UserArray: User[] = [];
  if(localStorage.getItem('Users'))
  {
    UserArray = JSON.parse(localStorage.getItem('Users') as string);
  }
  return UserArray.find(p=> p.userName === user.userName && p.password === user.password);
}

}
