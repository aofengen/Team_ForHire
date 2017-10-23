import { Component, OnInit } from '@angular/core';
import { NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { NgForm, FormsModule } from '@angular/forms';
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

  onLogin(form: NgForm) {
    const email = form.value.email;
    const password = form.value.password;
    if (email.trim()==="" || password.trim()==="") {
      alert("Please enter all fields!");
    } else {
      this.authService.loginUser(email, password);
  	  this.activeModal.close('Close click');
    }
	}
}