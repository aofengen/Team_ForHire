import { Component, OnInit } from '@angular/core';
import { NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { NgForm, FormsModule } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import * as firebase from 'firebase';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup-modal',
  templateUrl: './signup-modal.component.html',
  styleUrls: ['./signup-modal.component.css']
})
export class SignupModalComponent implements OnInit {

  constructor(private authService: AuthService, public activeModal: NgbActiveModal, private router: Router) {}

  ngOnInit() {
  }

  onSignup(form: NgForm) {
    const studentName = form.value.studentName;
    const email = form.value.email;
    const username = form.value.username;
    const password = form.value.password;
    
    if (studentName === "" || email.trim()==="" || username==="" || password.trim()===""){
      alert("Please enter all fields!");
    } else {
      if (password.length < 6) {
        alert("Please enter a longer password! Must be at least 6 characters.");
      } else {
        this.authService.newUser(studentName, email.trim(), username, password.trim());
        this.activeModal.close('Close click');
      }
    }
  }
}