import { OpenTickets } from './opentickets.model';
import * as firebase from 'firebase';
import { EventEmitter } from '@angular/core';

export class OpenTicketService {
	openTicketsChanged = new EventEmitter<OpenTickets[]>();
	private tickets: OpenTickets[] =[
	new OpenTickets('Devon Brosch', 'test', false, 'angular 4', 'Kenn', 'Launch', '5:00pm'),
	new OpenTickets('Aaron Ofengender', 'test2', false, 'angular 5', 'Paul', 'Cali', '8:00am')
	];

	constructor() { }

	getOpenTickets() {
		let database = firebase.database();
		let openIssuesRef = database.ref('openIssues').orderByKey();
		openIssuesRef.once('value').then(function(snapshot) {
	    	snapshot.forEach(function(childSnapshot) {
	    	let key = childSnapshot.key;
	      	let childData = childSnapshot.val();
	      	let openTickets = {
				name: childData.name,
				description: childData.desc,
				issueSolved: childData.issueSolved,
				category: childData.category,
				instructor: childData.instructor,
				location: childData.location,
				time: childData.time
			}
			this.tickets.push(openTickets)
	    	});
		});	
		return this.tickets	
	}
}