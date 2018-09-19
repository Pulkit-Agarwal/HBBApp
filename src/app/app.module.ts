import { BrowserModule } from '@angular/platform-browser';
import { NgModule,APP_INITIALIZER  } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { LoginService } from './login/login.service';
import { RouterModule, Routes } from '@angular/router';
import {Form,FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EmployeeComponent } from './employee/employee.component';
import { EmployeeService } from './employee/employee.service';
import { PolicyComponent } from './employee/policy/policy.component';
import { DependentComponent } from './employee/dependent/dependent.component';
import { NgbdModalComponent } from './employee/dependent/modal-component';
import { NgbdModalContent} from './employee/dependent/modal-component';
import { MessageService } from './message.service';
import { NgbDateParserFormatter, NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import { BsDatepickerModule } from 'ngx-bootstrap';
import { HrComponent } from './hr/hr.component';
import { HttpClientModule } from '@angular/common/http';
import { TranslateService } from './translate.service';
import { TranslatePipe } from './translate.pipe';
import { EmptopupComponent } from './employee/emptopup/emptopup.component';
const routes: Routes = [
  
  {
    path: 'employee/:policyid/:userid',
    component: EmployeeComponent
  },
  {
    path: 'hr/:userid',
    component: HrComponent
  },
  {
    path: '',
    component: LoginComponent
  }
  
  // , 
  // {
  //   path: '**',
  //   component: CoreComponent
  // }
];

export function setupTranslateFactory(
  service: TranslateService): Function {
  return () => service.use('en');
}

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    EmployeeComponent,
    PolicyComponent,
    DependentComponent,
    NgbdModalComponent,
    NgbdModalContent,
    HrComponent,
    TranslatePipe,
    EmptopupComponent
  ],
  entryComponents: [NgbdModalContent],
  imports: [
    BrowserModule,
    NgbModule,
    ReactiveFormsModule,
    FormsModule,
    BsDatepickerModule.forRoot(),
    RouterModule.forRoot(routes),
    HttpClientModule
  ],
  providers: [LoginService,EmployeeService,MessageService,
    TranslateService,
    {
      provide: APP_INITIALIZER,
      useFactory: setupTranslateFactory,
      deps: [ TranslateService ],
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
