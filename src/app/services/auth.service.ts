import * as firebase from 'firebase';
import { Router } from '@angular/router';
import { Users } from '../shared/users.model';
import { Injectable } from '@angular/core';
import { NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Injectable()

export class AuthService {
	token: string;
	private userInfo: Users[] = [];

	constructor(public activeModal: NgbActiveModal, private router: Router) {}

	newUser(name: string, email: string, username: string, password: string) {
		firebase.auth().createUserWithEmailAndPassword(email, password).catch(function(error) {
  		let errCode = error.code;
  		let errorMessage = error.message;
  		alert(errCode + ' - ' + errorMessage);
  	})
  	.then(
  		response => {	
  			this.router.navigate(['/ticket']);
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
  			this.router.navigate(['/ticket']);
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

	getUser() {
		let database = firebase.database();
		let email = firebase.auth().currentUser.email;
		let userInfo = [];
		let usersRef = firebase.database().ref('users').orderByKey();
		usersRef.once('value').then(function(snapshot) {
				snapshot.forEach(function(childSnapshot) {
	    	let key = childSnapshot.key;
	      	let childData = childSnapshot.val();
			console.log(childData);
			if (childData.email == email) {
				userInfo.push(childData)
			}
			})
			console.log(userInfo)
		})
		return this.userInfo = userInfo;
	}

	/*
	
	promoteAdmin() {
		let userID = firebase.auth().currentUser.uid;
		userID.set({isAdmin: true});
	}
		
	isAdmin() {
		let userID = firebase.auth().currentUser.uid;
		let admin = firebase.database().ref('users/' + userID); 
		console.log(admin.isAdmin);
	}
	*/
}