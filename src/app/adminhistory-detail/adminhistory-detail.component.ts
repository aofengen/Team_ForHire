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
	studentName: string;
  desc: string;
  timeSpent: string;
	category: string;
	solvedBy: string;
	solution: string;
	createTime: string;
	finishTime: string;

	
  constructor(private router: Router,
  						private route: ActivatedRoute,
              private historyService: HistoryService
  						) {}

  ngOnInit() {
 		this.route.params
      .subscribe(
          (params: Params) => {
			  this.index = +params['id'];
			  this.solvedTicket = this.historyService.getClosedTicket(this.index);
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
    this.createTime = data.createTime.slice(0,data.createTime.indexOf('G'));	
    this.finishTime = data.finishTime.slice(0,data.finishTime.indexOf('G'));
    }

  cancel() {
  	this.router.navigate(['/admin/history']);
  }

}
