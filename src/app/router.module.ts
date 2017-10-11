import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router';

import { LandingPageComponent } from './landing-page/landing-page.component';
import { HistoryComponent } from './history/history.component';
import { SHomeComponent } from './shome/shome.component';

export const routes = [
    { path: '', redirectTo: '/landing', pathMatch: 'full' },
    { path: 'landing', component: LandingPageComponent},
    { path: 'history', component: HistoryComponent},
    { path: 'home', component: SHomeComponent}
 ];