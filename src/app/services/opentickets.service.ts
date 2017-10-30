import { OpenTickets } from '../shared/opentickets.model';
import * as firebase from 'firebase';
import { EventEmitter } from '@angular/core';

export class OpenTicketService {
	openTicketsChanged = new EventEmitter<OpenTickets[]>();
	private tickets: OpenTickets[] = [];
	private ticketRef = [];

	constructor() {
	 }

	getOpenTickets() {
		let ticketRef = []
		let tickets = []
		let database = firebase.database();
		let openIssuesRef = database.ref('openIssues');
		openIssuesRef.on('child_added', function(snapshot) {
			tickets.push(snapshot.val());
		})
		this.tickets = tickets;
		this.openTicketsChanged.next(this.tickets.slice());
		return this.tickets = tickets	
	}

	getOpenTicket(x: number) {
		return this.tickets[x];
	}

	getPostID(x: string, y: number) {
		let ticketList = []
		let openIssuesRef = firebase.database().ref(x);
		return openIssuesRef.once('value').then(function(snapshot) {
			snapshot.forEach(function(childSnapshot) {
				let key = childSnapshot.key;
				ticketList.push(key);
			})
			return ticketList[y];
		}) 	
	}

	updateOpenTickets(x: number) {
		this.tickets.splice(x, 1);
	}
}