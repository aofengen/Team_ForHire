import { Component, OnInit } from '@angular/core';
import { Users } from '../shared/users.model';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
userInfo: Users[];


  
  constructor(private authService: AuthService) { }

  ngOnInit() {
    this.userInfo = this.authService.getUser();
  }

  logout() {
    this.authService.logout();
  }

  isAdmin() {
    this.authService.isAdmin()
  }

}
