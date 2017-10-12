import * as firebase from 'firebase';
import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Injectable()

export class AuthService {
	token: string;

	constructor(public activeModal: NgbActiveModal, private router: Router) {}

	newUser(name: string, email: string, username: string, password: string) {
		firebase.auth().createUserWithEmailAndPassword(email, password).catch(function(error) {
  		let errCode = error.code;
  		let errorMessage = error.message;
  		alert(errCode + ' - ' + errorMessage);
  	})
  	.then(
  		response => {	
  			this.router.navigate(['/home']);
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
	}

	loginUser(email:string, password: string) {
		firebase.auth().signInWithEmailAndPassword(email, password)
  	.then(
  		response => {	
  			this.router.navigate(['/home']);
  			firebase.auth().currentUser.getIdToken()
  			.then(
  				(token: string) => this.token = token
  			)
  		})
  	.catch(error => console.log(error))
	}

	logout() {
		firebase.auth().signOut()
		.then(
			response => {
				this.router.navigate(['/landing'])
			}
		);
		this.token = null;
	}

	isAuthenticated() {
		return this.token != null;
	}

	/*
	
	promoteAdmin() {
		userID.set({isAdmin: true});
	}
	
	isAdmin() {
		let userID = firebase.auth().currentUser.uid;
		return firebase.database.ref('users/' + userID + "/isAdmin") != false;
	}*/
}