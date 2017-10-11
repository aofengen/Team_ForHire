import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router';

import { LandingPageComponent } from './landing-page/landing-page.component';
import { HistoryComponent } from './history/history.component';
import { SHomeComponent } from './shome/shome.component';
import { CreateTicketComponent } from './create-ticket/create-ticket.component';
import { SdetailComponent } from './sdetail/sdetail.component';
import { AhomeComponent } from './ahome/ahome.component';

export const routes = [
    { path: '', redirectTo: '/landing', pathMatch: 'full' },
    { path: 'landing', component: LandingPageComponent},
    { path: 'history', component: HistoryComponent },
    { path: 'home', component: SHomeComponent },
    { path: 'admin/home', component: AhomeComponent },
    { path: 'create', component: CreateTicketComponent },
    { path: 'update', component: SdetailComponent }
 ];