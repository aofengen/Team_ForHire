import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';
import { NgsRevealConfig } from 'ng-scrollreveal';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = 'HELP!!!';

  constructor() {}

  ngOnInit() {
  	firebase.initializeApp({
	  	apiKey: "AIzaSyB8PBchgOOgLGvTRgxQSYZ2o6q4mKG8XNA",
	    authDomain: "help-me-queue.firebaseapp.com",
	    databaseURL: "https://help-me-queue.firebaseio.com"
  	});
  }


}
