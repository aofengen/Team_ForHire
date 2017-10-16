import * as firebase from 'firebase';
import { Injectable } from '@angular/core';

@Injectable()
export class CreateTicketService {

	constructor() {}

	createTicket(name: string, desc: string, location: string, category: string, instructor: string, issueSolved: boolean, suggestedSolution: string, time: string) {
		let newTicket = {
			studentName: name,
			desc: desc,
			location: location,
			category: category,
			instructor: instructor,
			issueSolved: issueSolved,
			suggestedSolution: suggestedSolution,
			time: time,
			id: firebase.auth().currentUser.uid
		}
		let newTicketKey = firebase.database().ref().child('openIssues').push().key;
		return firebase.database().ref('openIssues/' + newTicketKey).set(newTicket);
	}
}