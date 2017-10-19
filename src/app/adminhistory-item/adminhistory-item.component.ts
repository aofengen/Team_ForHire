import { Component, OnInit, Input } from '@angular/core';
import { HistoryModel } from '../shared/history.model'

@Component({
  selector: 'app-adminhistory-item',
  templateUrl: './adminhistory-item.component.html',
  styleUrls: ['./adminhistory-item.component.css']
})
export class AdminhistoryItemComponent implements OnInit {
  @Input() solvedTicket: HistoryModel;
  @Input() index: number;

  constructor() { }

  ngOnInit() {
  }

}
