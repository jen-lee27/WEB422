import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { OntarioComponent } from './components/ontario/ontario.component';
import { QuebecComponent } from './components/quebec/quebec.component';
import { AlbertaComponent } from './components/alberta/alberta.component';
import { ListComponent } from './components/list/list.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    OntarioComponent,
    QuebecComponent,
    AlbertaComponent,
    ListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
