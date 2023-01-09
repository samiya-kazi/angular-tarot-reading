import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardSelectionComponent } from './card-selection/card-selection.component';
import { CardComponent } from './card/card.component';
import { CardReadingComponent } from './card-reading/card-reading.component';

@NgModule({
  declarations: [
    AppComponent,
    CardSelectionComponent,
    CardComponent,
    CardReadingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
