import { Component, OnInit, Input } from '@angular/core';
import * as firebase from 'firebase';
import { NgForm, FormsModule } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { CreateTicketService } from '../services/create-ticket.service';
import { OpenTickets } from '../shared/opentickets.model';
import { OpenTicketService } from '../services/opentickets.service'

@Component({
  selector: 'app-adetail',
  templateUrl: './adetail.component.html',
  styleUrls: ['./adetail.component.css']
})
export class AdetailComponent implements OnInit {

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
              private createTicketService: CreateTicketService) { }

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
  this.createTime = data.createTime;	
  this.updateTime = data.updateTime;
  }

  cancel() {
  	this.router.navigate(['admin/ticket']);
  }


}
