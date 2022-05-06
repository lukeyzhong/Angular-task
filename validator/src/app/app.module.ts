import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { ValidateComponent } from './validate/validate.component';
import { VerifyComponent } from './verify/verify.component';
import { StoreModule } from '@ngrx/store';
import { patientreducer } from './store/patient.reducer';

@NgModule({
  declarations: [
    AppComponent,
    ValidateComponent,
    VerifyComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    StoreModule.forRoot({patients: patientreducer})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
