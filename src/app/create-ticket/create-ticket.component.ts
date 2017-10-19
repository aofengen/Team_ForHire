import { Component, OnInit } from '@angular/core';
import { NgForm, FormsModule } from '@angular/forms';
import { CreateTicketService } from '../services/create-ticket.service';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service'

@Component({
  selector: 'app-create-ticket',
  templateUrl: './create-ticket.component.html',
  styleUrls: ['./create-ticket.component.css']
})
export class CreateTicketComponent implements OnInit {

  constructor(private createTicketService: CreateTicketService, private router: Router, private authService: AuthService) { }

  ngOnInit() {
  }

  createTicket(form: NgForm) {
  	const name = form.value.name;
  	const desc = form.value.desc;
  	const location = form.value.location;
  	const category = form.value.category;
  	const issueSolved = false;
  	const time = Date();
  	this.createTicketService.createTicket(name, desc, location, category, issueSolved, time);
  	this.router.navigate(['/ticket']);
  }

  cancel() {
  	this.router.navigate(['ticket']);
  }

  isAdmin() {
    this.authService.isAdmin()
  }
}
