import { Component, OnInit, Input } from '@angular/core';
import { HistoryModel } from '../shared/history.model';

@Component({
  selector: 'app-history-item',
  templateUrl: './history-item.component.html',
  styleUrls: ['./history-item.component.css']
})
export class HistoryItemComponent implements OnInit {
  @Input() solvedTicket: HistoryModel;
  @Input() index: number;


  constructor() { }

  ngOnInit() {
  }

}
