import { Component, OnInit, Input } from '@angular/core';
import * as firebase from 'firebase';
import { NgForm, FormsModule } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { CreateTicketService } from '../services/create-ticket.service';
import { OpenTickets } from '../shared/opentickets.model';
import { OpenTicketService } from '../services/opentickets.service'

@Component({
  selector: 'app-aupdate',
  templateUrl: './aupdate.component.html',
  styleUrls: ['./aupdate.component.css']
})
export class AupdateComponent implements OnInit {

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
 	this.createTime = data.createTime;	
	this.updateTime = data.updateTime;
  }

  onSubmit(form: NgForm) {
		let updateTicket = {
			studentName: form.value.studentName,
			desc: form.value.desc,
			location: form.value.location,
			suggestedSolution: form.value.suggestedSolution,
			updateTime: Date()
		}
	this.ticketService.getPostID(this.id).then(function(data) {
		firebase.database().ref('openIssues/' + data).update(updateTicket);
	})
	this.ticketService.getOpenTickets();
	this.router.navigate(['admin/ticket']);
  }

  cancel() {
  	this.router.navigate(['admin/ticket']);
  }

  delete() {
	this.ticketService.getPostID(this.id).then(function(data) {
		firebase.database().ref('openIssues/' + data).remove();	
	})
  	this.router.navigate(['admin/ticket']);
  }

}
