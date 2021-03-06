import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { OpenTickets } from '../shared/opentickets.model';
import { OpenTicketService } from '../services/opentickets.service';
import { AuthService } from '../services/auth.service';
import * as firebase from 'firebase';
 
@Component({
  selector: 'app-aupdate-item',
  templateUrl: './aupdate-item.component.html',
  styleUrls: ['./aupdate-item.component.css']
})
export class AupdateItemComponent implements OnInit {
  @Input() ticket: OpenTickets;
  @Input() index: number;

  constructor(private ticketService: OpenTicketService, private authService: AuthService, private router: Router) { }
  private userInfo = [];
  user: string;

  ngOnInit() {
  }

  claimTicket() {
    let that = this;
    let instructorName = prompt("Enter your name:");
    if (instructorName === null) {
      this.router.navigate(['admin/ticket'])
    } else {
      this.ticketService.getPostID("openIssues", this.index).then(function(data) {
        firebase.database().ref('openIssues/' + data).update({'instructor': instructorName});
        that.router.navigate(['admin/ticket/'+ that.index]);
      }) 
    } 
  }
}