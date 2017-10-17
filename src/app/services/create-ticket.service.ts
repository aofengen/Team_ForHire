import * as firebase from 'firebase';
import { Injectable } from '@angular/core';
import { OpenTicketService } from './opentickets.service';

@Injectable()
export class CreateTicketService {

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
		return firebase.database().ref('openIssues/' + newTicketKey).set(newTicket);
	}	
}