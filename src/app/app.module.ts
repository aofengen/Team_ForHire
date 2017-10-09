import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { ShomeComponent } from './shome/shome.component';
import { AhomeComponent } from './ahome/ahome.component';
import { CreateTicketComponent } from './create-ticket/create-ticket.component';
import { UpdateTicketComponent } from './update-ticket/update-ticket.component';
import { HistoryComponent } from './history/history.component';
import { HeaderComponent } from './header/header.component';
import { SdetailComponent } from './sdetail/sdetail.component';
import { AdetailComponent } from './adetail/adetail.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    ShomeComponent,
    AhomeComponent,
    CreateTicketComponent,
    UpdateTicketComponent,
    HistoryComponent,
    HeaderComponent,
    SdetailComponent,
    AdetailComponent,

  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
