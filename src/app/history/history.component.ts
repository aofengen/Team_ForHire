import { Component, OnInit, Input } from '@angular/core';
import { HistoryModel } from '../shared/history.model'
import { HistoryService } from '../services/history.service';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoryComponent implements OnInit {
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
