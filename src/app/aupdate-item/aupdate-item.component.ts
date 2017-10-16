import { Component, OnInit, Input } from '@angular/core';
import { OpenTickets } from '../shared/opentickets.model';


@Component({
  selector: 'app-aupdate-item',
  templateUrl: './aupdate-item.component.html',
  styleUrls: ['./aupdate-item.component.css']
})
export class AupdateItemComponent implements OnInit {
  @Input() ticket: OpenTickets;
  @Input() index: number;

  constructor() { }

  ngOnInit() {
  }

}
