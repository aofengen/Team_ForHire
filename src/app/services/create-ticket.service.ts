import * as firebase from 'firebase';
import { Injectable } from '@angular/core';
import { OpenTicketService } from './opentickets.service';

@Injectable()
export class CreateTicketService {
	private categories = [];

	constructor(private openTicketService: OpenTicketService) {}

	createTicket(name: string, desc: string, location: string, category: string, issueSolved: boolean, time: string) {
		let newTicket = {
			studentName: name,
			desc: desc,
			location: location,
			category: category,
			instructor: "",
			issueSolved: issueSolved,
			suggestedSolution: "",
			createTime: time,
			updateTime: "",
			id: firebase.auth().currentUser.uid
		}
		let newTicketKey = firebase.database().ref().child('openIssues').push().key;
		firebase.database().ref('openIssues/' + newTicketKey).set(newTicket);
		this.openTicketService.getOpenTickets();
	}

	getCategories(){
		let categories = []
		let database = firebase.database();
		let openIssuesRef = database.ref('issueCategory').orderByKey();
		openIssuesRef.once('value').then(function(snapshot) {
	    	snapshot.forEach(function(childSnapshot) {
				let key = childSnapshot.key;
				let childData = childSnapshot.val();
				categories.push(childData);
	    	});
		});
		return this.categories = categories;

	}	
}