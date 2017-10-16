import { Component, OnInit } from '@angular/core';
import { NgForm, FormsModule } from '@angular/forms';
import { CreateTicketService } from '../services/create-ticket.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-ticket',
  templateUrl: './create-ticket.component.html',
  styleUrls: ['./create-ticket.component.css']
})
export class CreateTicketComponent implements OnInit {

  constructor(private createTicketService: CreateTicketService, private router: Router) { }

  ngOnInit() {
  }

  createTicket(form: NgForm) {
  	const name = form.value.name;
  	const desc = form.value.desc;
  	const location = form.value.location;
  	const category = form.value.category;
  	const instructor = null;
  	const issueSolved = false;
  	const suggestedSoultion = null;
  	const time = Date();
  	this.createTicketService.createTicket(name, desc, location, category, instructor, issueSolved, suggestedSoultion, time);
  	this.router.navigate(['/home']);
  }
}
