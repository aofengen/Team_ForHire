import { Component, OnInit, Input } from '@angular/core';
import * as firebase from 'firebase';
import { NgForm, FormsModule } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { HistoryService } from '../services/history.service';
import { HistoryModel } from '../shared/history.model';

@Component({
  selector: 'app-adminhistory-detail',
  templateUrl: './adminhistory-detail.component.html',
  styleUrls: ['./adminhistory-detail.component.css']
})
export class AdminhistoryDetailComponent implements OnInit {

  @Input() solvedTicket: HistoryModel;
	@Input() index: number;
  id: number;
	studentName: string;
  desc: string;
  timeSpent: string;
	category: string;
	solvedBy: string;
	solution: string;
	createTime: string;
	updateTime: string;

	
  constructor(private router: Router,
  						private route: ActivatedRoute,
              private historyService: HistoryService
  						) {}

  ngOnInit() {
 		this.route.params
      .subscribe(
          (params: Params) => {
			  this.id = +params['id'];
			  this.solvedTicket = this.historyService.getClosedTicket(this.id);
			  this.showDetails(this.solvedTicket);
		  }) 
  }
  
  showDetails(data) {
    this.studentName = data.studentName;
    this.desc = data.desc;
    this.timeSpent = data.timeSpent;
    this.category = data.category;
      this.solvedBy = data.solvedBy;
     this.solution = data.solution;
     this.createTime = data.createTime;	
    this.updateTime = data.updateTime;
    }

  cancel() {
  	this.router.navigate(['/history']);
  }

}
