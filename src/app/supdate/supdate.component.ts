import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { OpenTickets } from '../shared/opentickets.model';
import { OpenTicketService } from '../services/opentickets.service'

@Component({
  selector: 'app-supdate',
  templateUrl: './supdate.component.html',
  styleUrls: ['./supdate.component.css']
})
export class SupdateComponent implements OnInit {
	ticket: OpenTickets;
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
  						private ticketService: OpenTicketService
  						) {}

  ngOnInit() {
 		this.route.params
      .subscribe(
          (params: Params) => {
              this.id = +params['id'];
              this.ticket = this.ticketService.getOpenTicket(this.id);
          })
      let openTicket = [this.ticket];
    this.showDetails(openTicket);
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

  cancel() {
  	this.router.navigate(['/ticket']);
  }

  delete() {
  	firebase.database().ref('openIssues/' + this.id).remove();
  	this.router.navigate(['/ticket']);
  }

}
