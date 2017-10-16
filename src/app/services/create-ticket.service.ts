import * as firebase from 'firebase';
import { Injectable } from '@angular/core';
import { OpenTicketService } from './opentickets.service';

@Injectable()
export class CreateTicketService {

	constructor(private openTicketService: OpenTicketService) {}

	createTicket(name: string, desc: string, location: string, category: string, instructor: string, issueSolved: boolean, suggestedSolution: string, time: string) {
		let newTicket = {
			studentName: name,
			desc: desc,
			location: location,
			category: category,
			instructor: instructor,
			issueSolved: issueSolved,
			suggestedSolution: suggestedSolution,
			createTime: time,
			id: firebase.auth().currentUser.uid
		}
		let newTicketKey = firebase.database().ref().child('openIssues').push().key;
		return firebase.database().ref('openIssues/' + newTicketKey).set(newTicket);
	}

	updateTicket(id: number, uid: string, name: string, desc: string, location: string, category: string, instructor: string, issueSolved: boolean, suggestedSolution: string, createTime: string, updateTime: string){
		let newTicket = {
			studentName: name,
			desc: desc,
			location: location,
			category: category,
			instructor: instructor,
			issueSolved: issueSolved,
			suggestedSolution: suggestedSolution,
			createTime: createTime,
			updateTime: updateTime,
			uid: uid
		}
		let postID = this.openTicketService.getPostID(id);
		return firebase.database().ref('openIssues/' + postID).set(newTicket);
	}
}