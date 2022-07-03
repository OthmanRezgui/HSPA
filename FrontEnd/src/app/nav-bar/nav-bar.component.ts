import { Component, OnInit } from '@angular/core';
import { AlertifyService } from '../services/alertify.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  constructor(private alertifyService: AlertifyService) { }
  loggedinUser: string ;
  ngOnInit() {

  }
 loggedIn()
 {
  this.loggedinUser = localStorage.getItem('token') as string;
  return localStorage.getItem('token');
 }
 onLogout()
 {
  localStorage.removeItem('token');
  let msg = this.loggedinUser + " logged out" ;
  this.alertifyService.warning(msg);
 }
}
