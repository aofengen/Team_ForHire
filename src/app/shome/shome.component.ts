import { Component, OnInit, Input } from '@angular/core';
import { OpenTickets } from '../shared/opentickets.model'
import { OpenTicketService } from '../services/opentickets.service';

@Component({
  selector: 'app-shome',
  templateUrl: './shome.component.html',
  styleUrls: ['./shome.component.css']
})
export class SHomeComponent implements OnInit {
tickets: OpenTickets[];

  constructor(private ticketService: OpenTicketService) { }

  ngOnInit() {
    this.tickets = this.ticketService.getOpenTickets();
    // this.ticketService.openTicketsChanged
    // .subscribe(
    //   (tickets: OpenTickets[]) => {
    //   this.tickets = tickets;
    //   }
    // );
  }
}
