import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsersComponent } from './components/users/users.component';
import { EmailsComponent } from './components/emails/emails.component';

const routes: Routes = [
  {
    // by default, show user component
    path: '', component: UsersComponent
  },
  {
    path: 'users', component: UsersComponent
  },
  {
    path: 'emails', component: EmailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
