import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

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

import { AuthService } from './services/auth.service';
import { OpenTicketService } from './shared/opentickets.service';
import { AuthGuard } from './services/auth-guard.service';
//import { AdminGuard } from './services/admin-guard.service';
import { CreateTicketService } from './services/create-ticket.service';
import { routes } from './router.module';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule.forRoot(),
    RouterModule.forRoot(routes)
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
    SupdateComponent
  ],
  providers: [
    OpenTicketService,
    AuthService,
    AuthGuard,
    //AdminGuard,
    CreateTicketService,
    NgbActiveModal
  ],
  entryComponents: [
    SignupModalComponent,
    LoginModalComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
