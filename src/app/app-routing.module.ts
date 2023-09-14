import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ExploreComponent } from './explore/explore.component';
import { InspaceComponent } from './explore/inspace/inspace.component';
import { ForspaceComponent } from './explore/forspace/forspace.component';
import { ContactComponent } from './contact/contact.component';
import { StarshipComponent } from './explore/forspace/starship/starship.component';
import { SunComponent } from './explore/inspace/sun/sun.component';

const routes: Routes = [
  {path:"",component:HomeComponent},

  {path:"about",component:AboutComponent},
  {path:"explore",component:ExploreComponent,children :[
    {path:"forspace",component:ForspaceComponent,children:[
      {path:"ss",component:StarshipComponent}
    ]},
    {path:"inspace",component:InspaceComponent,children:[
      {path:"sun",component:SunComponent}
    ]}

  ]},
  {path:"con",component:ContactComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
