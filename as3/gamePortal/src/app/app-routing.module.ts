import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShooterGamesComponent } from './components/shooter-games/shooter-games.component';
import { CardGamesComponent } from './components/card-games/card-games.component';
import { StrategyGamesComponent } from './components/strategy-games/strategy-games.component';
import { HomeGamesComponent } from './components/home-games/home-games.component';

const routes: Routes = [
  {path: '', component: HomeGamesComponent},
  {path: 'shooter', component: ShooterGamesComponent},
  {path: 'card', component: CardGamesComponent},
  {path: 'strategy', component: StrategyGamesComponent},
  {path: 'home', redirectTo: '', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
