import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
//import { FooterComponent } from './footer/footer.component';
//import { HomeComponent } from './home/home.component';
//import { TechComponent } from './tech/tech.component';
@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    routingComponents,
   // FooterComponent
   //HomeComponent,
   // TechComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
