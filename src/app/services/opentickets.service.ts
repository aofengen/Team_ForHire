import { OpenTickets } from '../shared/opentickets.model';
import * as firebase from 'firebase';
import { EventEmitter } from '@angular/core';

export class OpenTicketService {
	openTicketsChanged = new EventEmitter<OpenTickets[]>();
	private tickets: OpenTickets[] = [];

	constructor() {
	 }

	getOpenTickets() {
		let tickets = []
		let database = firebase.database();
		let openIssuesRef = database.ref('openIssues').orderByKey();
		openIssuesRef.once('value').then(function(snapshot) {
	    	snapshot.forEach(function(childSnapshot) {
	    	let key = childSnapshot.key;
	      	let childData = childSnapshot.val();
			tickets.push(childData);
	    	});
		});	
		return this.tickets = tickets;
	}

	getOpenTicket(index: number) {
		let tickets = []
		let database = firebase.database();
		let openIssuesRef = database.ref('openIssues').orderByKey();
		openIssuesRef.once('value').then(function(snapshot) {
	    	snapshot.forEach(function(childSnapshot) {
	    	let key = childSnapshot.key;
	      	let childData = childSnapshot.val();
			tickets.push(childData);
	    	});
		});	
		this.tickets = tickets;
		return this.tickets[index];
	}
}