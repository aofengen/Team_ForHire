import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './services/auth-guard.service';
//import { AdminGuard } from './services/admin-guard.service';

import { LandingPageComponent } from './landing-page/landing-page.component';
import { HistoryComponent } from './history/history.component';
import { SHomeComponent } from './shome/shome.component';
import { CreateTicketComponent } from './create-ticket/create-ticket.component';
import { SdetailComponent } from './sdetail/sdetail.component';
import { AhomeComponent } from './ahome/ahome.component';
import { AdetailComponent } from './adetail/adetail.component';
import { AupdateComponent } from './aupdate/aupdate.component';
import { SupdateComponent } from './supdate/supdate.component';
import { AdminhistoryComponent } from './adminhistory/adminhistory.component';

export const routes = [
    { path: '', redirectTo: '/landing', pathMatch: 'full' },
    { path: 'landing', component: LandingPageComponent },
    { path: 'history', component: HistoryComponent, canActivate: [AuthGuard] },
    { path: 'home', component: SHomeComponent, canActivate: [AuthGuard] },    
    { path: 'create', component: CreateTicketComponent, canActivate: [AuthGuard] },
    { path: 'detail', component: SdetailComponent, canActivate: [AuthGuard] },
    { path: 'update', component: SupdateComponent, canActivate: [AuthGuard] },
    { path: 'admin/home', component: AhomeComponent, canActivate: [AuthGuard] },
    { path: 'admin/detail', component: AdetailComponent, canActivate: [AuthGuard] },
    { path: 'admin/update', component: AupdateComponent, canActivate: [AuthGuard] },
    { path: 'admin/history', component: AdminhistoryComponent, canActivate: [AuthGuard]}
]