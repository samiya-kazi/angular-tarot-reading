import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardSelectionComponent } from './card-selection/card-selection.component';
import { CardComponent } from './card/card.component';
import { CardReadingComponent } from './card-reading/card-reading.component';
import { MainComponentComponent } from './main-component/main-component.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    CardSelectionComponent,
    CardComponent,
    CardReadingComponent,
    MainComponentComponent
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
