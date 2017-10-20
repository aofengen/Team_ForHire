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
			  this.index = +params['id'];
			  this.ticket = this.ticketService.getOpenTicket(this.index);
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
 	this.createTime = data.createTime.slice(0,data.createTime.indexOf('G'));	
	this.updateTime = data.updateTime.slice(0,data.updateTime.indexOf('G'));
  }

  onSubmit(form: NgForm) {
		let thisComponent = this;
		let close = confirm("Issue Solved?\nOk - update and close ticket.\nCancel - update and leave open.");
		if (close == true) {
			let solvedBy = prompt("Who solved the issue?");
			let solution = prompt("How was the problem solved?");
			if (solvedBy.trim() === "" || solution.trim() === "") {
				alert("Please fill out both prompts!");
			} else {
				let completedTicket = {
					studentName: form.value.studentName,
					desc: form.value.desc,
					category: this.category,
					solution: solution,
					solvedBy: solvedBy,
					createTime: this.createTime,
					finishTime: Date(),
					issueSolved: true
				}
				this.ticketService.getPostID("openIssues", this.index).then(function(data) {
					firebase.database().ref('history/' + data).set(completedTicket);
					firebase.database().ref('openIssues/' + data).remove();
					thisComponent.router.navigate(['/admin/ticket']);
				})
			}
			} else {
				let updateTicket = {
					studentName: form.value.studentName,
					desc: form.value.desc,
					location: form.value.location,
					suggestedSolution: form.value.suggestedSolution,
					updateTime: Date()
			}
		this.ticketService.getPostID("openIssues", this.index).then(function(data) {
			firebase.database().ref('openIssues/' + data).update(updateTicket);
			thisComponent.router.navigate(['/admin/ticket']);
		})
		}
	}

  cancel() {
  	this.router.navigate(['admin/ticket']);
  }

  delete() {
		let thisComponent = this;
	this.ticketService.getPostID("openIssues", this.index).then(function(data) {
		firebase.database().ref('openIssues/' + data).remove();
		thisComponent.router.navigate(['admin/ticket']);
	})	
  }
}
