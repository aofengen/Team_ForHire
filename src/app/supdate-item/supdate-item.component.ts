import { Component, OnInit, Input } from '@angular/core';
import { OpenTickets } from '../shared/opentickets.model';

@Component({
  selector: 'app-supdate-item',
  templateUrl: './supdate-item.component.html',
  styleUrls: ['./supdate-item.component.css']
})
export class SupdateItemComponent implements OnInit {
  @Input() ticket: OpenTickets;
  @Input() index: number;

  constructor() { }

  ngOnInit() {
  }

}
