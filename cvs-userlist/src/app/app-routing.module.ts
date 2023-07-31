import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DirectoryComponent } from './directory/directory.component';
import { ContactComponent } from './contact/contact.component';

const routes: Routes = [
  {path: '', component: DirectoryComponent},
  {path: 'contact', component: ContactComponent},
  {path: 'directory', component: DirectoryComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
