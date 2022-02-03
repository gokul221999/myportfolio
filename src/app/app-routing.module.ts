import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { TechComponent } from './tech/tech.component';
import { FooterComponent } from './footer/footer.component';
const routes: Routes = [
  {
    path:'home',
    component: HomeComponent
  },
  {
    path:'tech',
    component: TechComponent
  },
  {
    path:'footer',
    component: FooterComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [HomeComponent, TechComponent, FooterComponent]