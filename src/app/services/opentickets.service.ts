import { OpenTickets } from '../shared/opentickets.model';
import * as firebase from 'firebase';
import { EventEmitter } from '@angular/core';

export class OpenTicketService {
	openTicketsChanged = new EventEmitter<OpenTickets[]>();
	private tickets: OpenTickets[] = [];
	private ticketList = [];

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

	getPostID(y: number) {
		let ticketList = []
		let openIssuesRef = firebase.database().ref('openIssues');
		let ticketID = openIssuesRef.once('value').then(function(snapshot) {
			snapshot.forEach(function(childSnapshot) {
				let key = childSnapshot.key;
				ticketList.push(key);
			})
			console.log("test: ", ticketList[y]);
			return ticketList[y];
		}) 
		console.log(ticketID);
		//return this.ticketList[y];	
	}
}