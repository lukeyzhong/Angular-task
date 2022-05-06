import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ValidateComponent } from './validate/validate.component';
import { VerifyComponent } from './verify/verify.component';

const routes: Routes = [

  { path: 'validate', component: ValidateComponent },
  { path: 'verify', component: VerifyComponent, },
  { path: '', redirectTo: 'validate', pathMatch: 'full' },
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule, RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
  // providers: [AuthGuard]
})
export class AppRoutingModule {
  
}
function canActivate(): import("@angular/router").Route {
  throw new Error('Function not implemented.');
}