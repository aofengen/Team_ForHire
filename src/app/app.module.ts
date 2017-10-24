import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NgsRevealModule } from 'ng-scrollreveal';
import { NgsRevealConfig } from 'ng-scrollreveal';

import { AppComponent } from './app.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { SHomeComponent } from './shome/shome.component';
import { AhomeComponent } from './ahome/ahome.component';
import { CreateTicketComponent } from './create-ticket/create-ticket.component';
import { HistoryComponent } from './history/history.component';
import { SdetailComponent } from './sdetail/sdetail.component';
import { AdetailComponent } from './adetail/adetail.component';
import { SignupModalComponent } from './signup-modal/signup-modal.component';
import { LoginModalComponent } from './login-modal/login-modal.component';
import { AupdateComponent } from './aupdate/aupdate.component';
import { SupdateComponent } from './supdate/supdate.component';
import { HeaderComponent } from './header/header.component';
import { AdminheaderComponent } from './adminheader/adminheader.component';
import { AdminhistoryComponent } from './adminhistory/adminhistory.component';
import { SupdateItemComponent } from './supdate-item/supdate-item.component';
import { AupdateItemComponent } from './aupdate-item/aupdate-item.component';
import { HistoryItemComponent } from './history-item/history-item.component';
import { HistoryDetailComponent } from './history-detail/history-detail.component';
import { AdminhistoryDetailComponent } from './adminhistory-detail/adminhistory-detail.component';
import { AdminhistoryItemComponent } from './adminhistory-item/adminhistory-item.component';
import { AdminSettingsComponent } from './admin-settings/admin-settings.component';

import { AuthService } from './services/auth.service';
import { OpenTicketService } from './services/opentickets.service';
import { AuthGuard } from './services/auth-guard.service';
//import { AdminGuard } from './services/admin-guard.service';
import { CreateTicketService } from './services/create-ticket.service';
import { HistoryService } from './services/history.service';
import { routes } from './router.module';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule.forRoot(),
    RouterModule.forRoot(routes),
    NgsRevealModule.forRoot()
  ],
  declarations: [
    AppComponent,
    LandingPageComponent,
    SHomeComponent,
    AhomeComponent,
    CreateTicketComponent,
    HistoryComponent,
    SdetailComponent,
    AdetailComponent,
    SignupModalComponent,
    LoginModalComponent,
    AupdateComponent,
    SupdateComponent,
    HeaderComponent,
    AdminheaderComponent,
    AdminhistoryComponent,
    SupdateItemComponent,
    AupdateItemComponent,
    HistoryItemComponent,
    HistoryDetailComponent,
    AdminhistoryDetailComponent,
    AdminhistoryItemComponent,
    AdminSettingsComponent
  ],
  providers: [
    OpenTicketService,
    AuthService,
    AuthGuard,
   //AdminGuard,
    CreateTicketService,
    HistoryService,
    NgbActiveModal
  ],
  entryComponents: [
    SignupModalComponent,
    LoginModalComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
