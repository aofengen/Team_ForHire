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

	getOpenTicket(x: number) {
		return this.tickets[x];
	}

	getPostID(x: number) {
		let tickets = [];
		let openIssuesRef = firebase.database().ref('openIssues');
		openIssuesRef.once('value').then(function(snapshot) {
			tickets = snapshot.val();
			console.log(tickets);
		//Need to pull items WITHOUT their child elements
		}) 
		console.log(tickets[x]);
		return tickets[x];
		
	}
}