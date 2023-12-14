import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OntarioComponent } from './components/ontario/ontario.component';
import { QuebecComponent } from './components/quebec/quebec.component';
import { AlbertaComponent } from './components/alberta/alberta.component';
import { ListComponent } from './components/list/list.component';

const routes: Routes = [
  {path: '', component: ListComponent},
  {path: 'ontario', component: OntarioComponent},
  {path: 'quebec', component: QuebecComponent},
  {path: 'alberta', component: AlbertaComponent},
  {path: 'home', redirectTo: '', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
