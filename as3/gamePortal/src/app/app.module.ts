import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SideBarComponent } from './components/side-bar/side-bar.component';
import { SearchComponent } from './components/search/search.component';
import { ContentComponent } from './components/content/content.component';
import { HttpClientModule } from '@angular/common/http';
import { ShooterGamesComponent } from './components/shooter-games/shooter-games.component';
import { CardGamesComponent } from './components/card-games/card-games.component';
import { StrategyGamesComponent } from './components/strategy-games/strategy-games.component';
import { HomeGamesComponent } from './components/home-games/home-games.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    SideBarComponent,
    SearchComponent,
    ContentComponent,
    ShooterGamesComponent,
    CardGamesComponent,
    StrategyGamesComponent,
    HomeGamesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
