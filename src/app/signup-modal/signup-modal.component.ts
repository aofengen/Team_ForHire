import { Component, OnInit } from '@angular/core';
import { NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { AuthService } from '../services/auth.service';
import * as firebase from 'firebase';

@Component({
  selector: 'app-signup-modal',
  templateUrl: './signup-modal.component.html',
  styleUrls: ['./signup-modal.component.css']
})
export class SignupModalComponent implements OnInit {

  constructor(private authService: AuthService, public activeModal: NgbActiveModal) {}

  ngOnInit() {
  }

  onSignup(name: string, email: string, username: string, password: string) {

    if (name === "" || email.trim()==="" || username==="" || password.trim()==="")
    {
      alert("Please enter all fields!");

    }if (password.length < 6) {

      alert("Please enter a longer password! Must be at least 6 characters.");

    } else {
      let newUser = {
        email: email,
          name: name,
          username: username,
          isAdmin: false
      }
      let newUserKey = firebase.database().ref().child('users').push().key;
      firebase.database().ref('users/' + newUserKey).set(newUser);
      
      this.authService.newUser(name, email.trim(), username, password.trim());
      this.activeModal.close('Close click');
    }
  }
}