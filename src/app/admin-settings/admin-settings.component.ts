import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase'; 
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-admin-settings',
  templateUrl: './admin-settings.component.html',
  styleUrls: ['./admin-settings.component.css']
})
export class AdminSettingsComponent implements OnInit {

  constructor(private authService: AuthService) { }

  ngOnInit() {
  }

  makeAdmin(username) {
    this.authService.promoteAdmin(username);
  }

  addCategory(category) {
    let issues = firebase.database().ref("issueCategory")
    issues.update({category: category});
  }

  deleteCategory(category) {
    alert("This will delete an item from the Issue Category list");
    // let issues = firebase.database().ref("issueCategory/")
    // issues.remove(category);
  }
}
