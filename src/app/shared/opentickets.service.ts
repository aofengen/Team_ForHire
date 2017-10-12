import { OpenTickets } from './opentickets.model';
import { EventEmitter } from '@angular/core';

export class OpenTicketService {
	openTicketsChanged = new EventEmitter<OpenTickets[]>();
	private tickets: OpenTickets[] =[
	new OpenTickets('Devon Brosch', 'test', false, 'angular 4', 'Kenn', 'Launch', '5:00pm'),
	new OpenTickets('Aaron Ofengender', 'test2', false, 'angular 5', 'Paul', 'Cali', '8:00am')
	];

	getOpenTickets() {
		return this.tickets.slice();
	}

	addOpenTicket(ticket: OpenTickets) {
		this.tickets.push(ticket);
		this.openTicketsChanged.emit(this.tickets.slice());
	}

	addOpenTickets(tickets: OpenTickets[]) {
		this.tickets.push(...tickets);
		this.openTicketsChanged.emit(this.tickets.slice());
	}
}