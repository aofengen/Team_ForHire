import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Users } from '../shared/users.model';
@Component({
  selector: 'app-adminheader',
  templateUrl: './adminheader.component.html',
  styleUrls: ['./adminheader.component.css']
})
export class AdminheaderComponent implements OnInit {
userInfo: Users[];
title = 'Admin Portal';

  constructor(private authService: AuthService) { }

  ngOnInit() {
  	this.userInfo = this.authService.getUser();
  }

  logout() {
    this.authService.logout();
  }

}
