import { Component, OnInit } from '@angular/core';
import { OpenTickets } from '../shared/opentickets.model'
import { OpenTicketService } from '../shared/opentickets.service';

@Component({
  selector: 'app-shome',
  templateUrl: './shome.component.html',
  styleUrls: ['./shome.component.css']
})
export class SHomeComponent implements OnInit {
tickets: OpenTickets[];

  constructor(private otService: OpenTicketService) { }

  ngOnInit() {
    this.tickets = this.otService.getOpenTickets();
    this.otService.openTicketsChanged
    .subscribe(
      (tickets: OpenTickets[]) => {
        this.tickets = tickets;
      }
     );
  }
}
