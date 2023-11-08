import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { WelcomeCardComponent } from './components/welcome-card/welcome-card.component';
import { TalentCardComponent } from './components/talent-card/talent-card.component';
import { BioAreaComponent } from './components/bio-area/bio-area.component';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    WelcomeCardComponent,
    TalentCardComponent,
    BioAreaComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
