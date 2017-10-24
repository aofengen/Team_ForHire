import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase'; 
import { AuthService } from '../services/auth.service';
import { CreateTicketService } from '../services/create-ticket.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-settings',
  templateUrl: './admin-settings.component.html',
  styleUrls: ['./admin-settings.component.css']
})
export class AdminSettingsComponent implements OnInit {

  private categories = [];
  private usernames = [];

  constructor(
    private authService: AuthService, 
    private createTicketService: CreateTicketService, 
    private router: Router) { }

  ngOnInit() {
    this.getCategories();
    this.getUserNames();
  }

  makeAdmin(user) {
    this.authService.promoteAdmin(user);
    this.router.navigate(['admin/ticket']);
  }

  addCategory(category) {
    let issues = firebase.database().ref("issueCategory")
    let categoryKey = category;
    let categoryData = categoryKey;
    let categoryObject = {};
    eval("categoryObject." + categoryKey + " = '" + categoryData + "'");
    issues.update(categoryObject)
    this.router.navigate(['admin/ticket']);
  }

  deleteCategory(category) {
    alert("This will delete an item from the Issue Category list");
    let issues = firebase.database().ref("issueCategory/" + category)
    issues.remove()
    this.router.navigate(['admin/ticket']);
  }
  getCategories() {
    this.categories = this.createTicketService.getCategories();
    return this.categories
  }

  getUserNames() {
    this.usernames = this.authService.getAllUser()
  }
}
