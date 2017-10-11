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

  constructor(public activeModal: NgbActiveModal, private authService: AuthService) {}

  ngOnInit() {
  }

  onSignup(name: string, email: string, username: string, password: string) {
  	this.authService.newUser(name, email, username, password);
  }
}