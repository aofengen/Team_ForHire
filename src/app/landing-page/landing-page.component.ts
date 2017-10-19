import { Component, OnInit, Input } from '@angular/core';
import { NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { SignupModalComponent } from '../signup-modal/signup-modal.component';
import { LoginModalComponent } from '../login-modal/login-modal.component';
import { NgsRevealModule } from 'ng-scrollreveal';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit {

  constructor(private modalService: NgbModal) { }

  ngOnInit() {
  }

  signup() {
  	this.modalService.open(SignupModalComponent);
  }

  login() {
  	this.modalService.open(LoginModalComponent);
  }
}
