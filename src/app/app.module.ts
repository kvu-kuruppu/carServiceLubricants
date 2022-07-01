import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {AppRoutingModule} from "./app-routing.module";
import {HeaderComponent} from './header/header.component';
import {LubricantsComponent} from './lubricants/lubricants.component';
import {LubricantListComponent} from './lubricants/lubricant-list/lubricant-list.component';
import {LubricantItemsComponent} from './lubricants/lubricant-list/lubricant-items/lubricant-items.component';
import {LubricantDetailsComponent} from './lubricants/lubricant-details/lubricant-details.component';
import {LubricantService} from "./lubricants/lubricant.service";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LubricantsComponent,
    LubricantListComponent,
    LubricantItemsComponent,
    LubricantDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [LubricantService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
