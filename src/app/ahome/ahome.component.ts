import { Component, OnInit } from '@angular/core';
import { OpenTickets } from '../shared/opentickets.model'
import { OpenTicketService } from '../shared/opentickets.service';

@Component({
  selector: 'app-ahome',
  templateUrl: './ahome.component.html',
  styleUrls: ['./ahome.component.css']
})
export class AhomeComponent implements OnInit {
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
