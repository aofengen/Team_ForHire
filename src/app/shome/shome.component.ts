import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { OpenTickets } from '../shared/opentickets.model'
import { OpenTicketService } from '../services/opentickets.service';

@Component({
  selector: 'app-shome',
  templateUrl: './shome.component.html',
  styleUrls: ['./shome.component.css']
})
export class SHomeComponent implements OnInit {
tickets: OpenTickets[];
subscription: Subscription;

  constructor(private ticketService: OpenTicketService) { }

  ngOnInit() {
    this.tickets = this.ticketService.getOpenTickets()
    this.subscription = this.ticketService.openTicketsChanged
    .subscribe(
      (tickets: OpenTickets[]) => {
        this.tickets = tickets;
      }
    );
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
