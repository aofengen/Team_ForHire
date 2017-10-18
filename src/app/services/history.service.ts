import { HistoryModel } from '../shared/history.model';
import * as firebase from 'firebase';
import { EventEmitter } from '@angular/core';

export class HistoryService {
  closedTickets = new EventEmitter<HistoryModel[]>();
  private solvedTicket: HistoryModel[] = [];

  constructor() { 
	 }
  
  getHistory(){
    let solvedTicket = []
    let database = firebase.database();
    let HistoryRef = database.ref('history').orderByKey();
		HistoryRef.once('value').then(function(snapshot) {
	    	snapshot.forEach(function(childSnapshot) {
				let key = childSnapshot.key;
				let childData = childSnapshot.val();
				solvedTicket.push(childData);
	    	});
		});	
		return this.solvedTicket = solvedTicket;
  }

  getClosedTicket(x: number) {
		return this.solvedTicket[x];
	}
}