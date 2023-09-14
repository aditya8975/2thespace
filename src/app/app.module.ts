import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ExploreComponent } from './explore/explore.component';
import { ContactComponent } from './contact/contact.component';
import { ForspaceComponent } from './explore/forspace/forspace.component';
import { InspaceComponent } from './explore/inspace/inspace.component';
import { StarshipComponent } from './explore/forspace/starship/starship.component';
import { SunComponent } from './explore/inspace/sun/sun.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ExploreComponent,
    ContactComponent,
ForspaceComponent,
InspaceComponent,
StarshipComponent,
SunComponent,

  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
