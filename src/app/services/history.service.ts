import { HistoryModel } from '../shared/history.model';
import { Injectable } from '@angular/core';
import * as firebase from 'firebase';
import { EventEmitter } from '@angular/core';

@Injectable()
export class HistoryService {
  closedTickets = new EventEmitter<HistoryModel[]>();
  private solvedTickets: HistoryModel[] = [];

  constructor() { 

  }
  
  getHistory(){
    let solvedTickets = []
    let database = firebase.database();
    let HistoryRef = database.ref('history').orderByKey();
		HistoryRef.once('value').then(function(snapshot) {
	    	snapshot.forEach(function(childSnapshot) {
	    	let key = childSnapshot.key;
	      	let childData = childSnapshot.val();
			solvedTickets.push(childData);
	    	});
		});	
		return this.solvedTickets = solvedTickets;
  }

  getClosedTicket(x: number) {
		return this.solvedTickets[x];
	}

	getPostID(x: number) {
		let solvedTickets = [];
		let HistoryRef = firebase.database().ref('history');
    HistoryRef.once('value').then(function(snapshot) {
			solvedTickets = snapshot.val();
			console.log(solvedTickets);
		//Need to pull items WITHOUT their child elements
		}) 
		console.log(solvedTickets[x]);
		return solvedTickets[x];
		
	}
}

