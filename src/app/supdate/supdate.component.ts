import { Component, OnInit, Input } from '@angular/core';
import * as firebase from 'firebase';
import { NgForm, FormsModule } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { CreateTicketService } from '../services/create-ticket.service';
import { OpenTickets } from '../shared/opentickets.model';
import { OpenTicketService } from '../services/opentickets.service'

@Component({
  selector: 'app-supdate',
  templateUrl: './supdate.component.html',
  styleUrls: ['./supdate.component.css']
})
export class SupdateComponent implements OnInit {
	@Input() ticket: OpenTickets;
	@Input() index: number;
	// ticket: OpenTickets;
	id: number;
	studentName: string;
	desc: string;
	location: string;
	category: string;
	instructor: string;
	suggestedSolution: string;
	createTime: string;
	updateTime: string;

	
  constructor(private router: Router,
  						private route: ActivatedRoute,
						private ticketService: OpenTicketService,
						private createTicketService: CreateTicketService
  						) {}

  ngOnInit() {
 		this.route.params
      .subscribe(
          (params: Params) => {
			  this.id = +params['id'];
			  this.ticket = this.ticketService.getOpenTicket(this.id);
			  this.showDetails(this.ticket);
			
		  }) 
	}

  showDetails(data) {
	this.studentName = data.studentName;
	this.desc = data.desc;
	this.location = data.location;
	this.category = data.category;
    this.instructor = data.instructor;
 	this.suggestedSolution = data.suggestedSolution;
 	this.createTime = data.time;	
 	if (!data.updateTime) {
 		this.updateTime = "";
 	} else {
			this.updateTime = data.updateTime;
 	}
  }

  onSubmit(form: NgForm) {
	// const studentName = form.value.studentName;

	// const desc = form.value.desc;
	// const location = form.value.location;
	// const category = form.value.category;
	// const instructor = form.value.instructor;
	// const issueSolved = false;
	// const suggestedSoultion = form.value.suggestedSolution;
	// const createTime = form.value.createTime;
	// const updateTime = Date();
	// const uid = firebase.auth().currentUser.uid;
	const postID = this.ticketService.getPostID(this.id)
	console.log(postID);
	//this.createTicketService.updateTicket(postID, uid, studentName, desc, location, category, instructor, issueSolved, suggestedSoultion, createTime, updateTime);
	this.router.navigate(['/ticket']);
  }

  cancel() {
  	this.router.navigate(['/ticket']);
  }

  delete() {
  	firebase.database().ref('openIssues/' + this.id).remove();
  	this.router.navigate(['/ticket']);
  }

}
