import { Component, OnInit } from '@angular/core';
import { NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';
import * as firebase from 'firebase';

@Component({
  selector: 'app-login-modal',
  templateUrl: './login-modal.component.html',
  styleUrls: ['./login-modal.component.css']
})
export class LoginModalComponent implements OnInit {

	token: string;

  constructor(public activeModal: NgbActiveModal, private router: Router) {}

  ngOnInit() {
  }

  onLogin(email: string, password: string) {
  	firebase.auth().signInWithEmailAndPassword(email, password)
  	.then(
  		response => {	
  			firebase.auth().currentUser.getIdToken()
  			.then(
  				(token: string) => this.token = token
  			)
  		})
  	.catch(error => console.log(error))
	  this.activeModal.close('Close click');
	  this.router.navigate(['/home']);
	}

}
