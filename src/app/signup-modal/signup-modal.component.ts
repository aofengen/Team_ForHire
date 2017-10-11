import { Component, OnInit } from '@angular/core';
import { NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';
import * as firebase from 'firebase';

@Component({
  selector: 'app-signup-modal',
  templateUrl: './signup-modal.component.html',
  styleUrls: ['./signup-modal.component.css']
})
export class SignupModalComponent implements OnInit {
	token: string;

  constructor(public activeModal: NgbActiveModal, private router: Router) {}

  ngOnInit() {
  }

  onSignup(name: string, email: string, username: string, password: string) {
  	firebase.auth().createUserWithEmailAndPassword(email, password).catch(function(error) {
  		let errCode = error.code;
  		let errorMessage = error.message;
  		alert(errCode + ' - ' + errorMessage);
  	})
  	.then(
  		response => {	
  			firebase.auth().currentUser.getIdToken()
  			.then(
  				(token: string) => this.token = token
  			)
  		})
  	.catch(error => console.log(error))

		let User = firebase.database().ref('users/');
		let newUser = User.push()
  	newUser.set({
  		email: email,
	    name: name,
	    username: username,
	    isAdmin: false
	  })
	  this.activeModal.close('Close click');
	  this.router.navigate(['/home']);
	}
}