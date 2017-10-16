import { Component, OnInit } from '@angular/core';
import { NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { AuthService } from '../services/auth.service';
import * as firebase from 'firebase';

@Component({
  selector: 'app-login-modal',
  templateUrl: './login-modal.component.html',
  styleUrls: ['./login-modal.component.css']
})
export class LoginModalComponent implements OnInit {

	token: string;

  constructor(private authService: AuthService, public activeModal: NgbActiveModal) {}

  ngOnInit() {
  }

  onLogin(email: string, password: string) {
  	this.authService.loginUser(email, password);
  	this.activeModal.close('Close click');
	}
}