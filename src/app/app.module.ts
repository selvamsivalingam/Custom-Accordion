import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CustomAccordionModule } from 'projects/custom-accordion/src/public-api';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CustomAccordionModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
