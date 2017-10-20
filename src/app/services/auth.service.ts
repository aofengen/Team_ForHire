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
  			firebase.auth().currentUser.getIdToken()
  			.then(
  				(token: string) => this.token = token
			)
			 let newUser = {
				email: email,
				  name: name,
				  username: username,
				  isAdmin: false
			  }
			let newUserKey = firebase.database().ref().child('users').push().key;
			firebase.database().ref('users/' + newUserKey).set(newUser);
			this.router.navigate(['/ticket']);	
  		})
	.catch(error => console.log(error))
	}

	loginUser(email:string, password: string) {
		firebase.auth().signInWithEmailAndPassword(email, password)
  	.then(
  		response => {	
  			firebase.auth().currentUser.getIdToken()
  			.then(
  				(token: string) => this.token = token
			  )
			this.router.navigate(['/ticket']);
  		})
  	.catch(error => alert(error))
	}

	logout() {
		firebase.auth().signOut()
		.then(
			response => {
				this.router.navigate(['/'])
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
			if (childData.email == email) {
				userInfo.push(childData);
			}
			})
		})
		return this.userInfo = userInfo;
	}

	/*
	
	promoteAdmin() {
		let userID = firebase.auth().currentUser.uid;
		userID.update({isAdmin: true});
	}*/

	isAdmin() {
		let that = this;
		this.getUserID(firebase.auth().currentUser.email).then(function(data) {
			let admin = firebase.database().ref('users/' + data + "/isAdmin");	
			admin.once("value").then(function(snapshot) {
				let x = snapshot.val();
				if (x === true) {
					that.router.navigate(['/admin/ticket']);
				} else {
					alert("You are not authorized to view the admin portal.");
					that.router.navigate(['/ticket']);
				}
			})
		}
	)}
		
	// isAdmin() {
	// 	return this.getUserID(firebase.auth().currentUser.email).then(function(data) {
	// 		let admin = firebase.database().ref('users/' + data + "/isAdmin");	
	// 		return admin.once("value").then(function(snapshot) {
	// 			let x= snapshot.val();
	// 			return x;
	// 		})
	// 	}
	// )}


	getUserID(email: string) {
		let ticketList;
		let openIssuesRef = firebase.database().ref('users');
		return openIssuesRef.once('value').then(function(snapshot) {
			snapshot.forEach(function(childSnapshot) {
				let key = childSnapshot.key;
				let childData = childSnapshot.val();
				if (childData.email == email) {
					ticketList = key;
				}
				})
			return ticketList
		}) 	
	}
}