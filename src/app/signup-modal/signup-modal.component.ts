import { Component, OnInit } from '@angular/core';
import { NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import * as firebase from 'firebase';

@Component({
  selector: 'app-signup-modal',
  templateUrl: './signup-modal.component.html',
  styleUrls: ['./signup-modal.component.css']
})
export class SignupModalComponent implements OnInit {

  constructor(public activeModal: NgbActiveModal) {}

  ngOnInit() {
  }

  onSignup(name: string, email: string, username: string, password: string) {
  	console.log(name, email, username, password);
  	firebase.auth().createUserWithEmailAndPassword(email, password).catch(function(error) {
  		let errCode = error.code;
  		let errorMessage = error.message;
  		alert(errCode + ' - ' + errorMessage);
  	})
		let User = firebase.database().ref('users/');
		let newUser = User.push()
  	newUser.set({
  		email: email,
	    name: name,
	    username: username,
	    isAdmin: false
	  })
	}
}