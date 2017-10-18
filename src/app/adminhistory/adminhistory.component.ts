import { Component, OnInit } from '@angular/core';
import { HistoryModel } from '../shared/history.model'
import { HistoryService } from '../services/history.service';

@Component({
  selector: 'app-adminhistory',
  templateUrl: './adminhistory.component.html',
  styleUrls: ['./adminhistory.component.css']
})
export class AdminhistoryComponent implements OnInit {
  solvedTickets: HistoryModel[];
  
    constructor(private hService:HistoryService) { }
  
    ngOnInit() {
      this.solvedTickets = this.hService.getHistory();
      this.hService.closedTickets
      .subscribe(
        (solvedTickets: HistoryModel[]) => {
          this.solvedTickets = solvedTickets;
        }
       );
    }
  
}
