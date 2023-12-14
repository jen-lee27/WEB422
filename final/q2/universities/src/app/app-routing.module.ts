import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  // {
  //   path: ''//, component: UsersComponent
  // },
  // {
  //   path: 'ontario'//, component: UsersComponent
  // },
  // {
  //   path: 'quebec'//, component: EmailsComponent
  // },
  // {
  //   path: 'alberta'//, component: EmailsComponent
  // }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
