import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ChordDiagramComponent } from './chord-diagram/components/chord-diagram/chord-diagram.component';
import { PhoneBrandsComponent } from './chord-diagram/components/phone-brands/phone-brands.component';

@NgModule({
  declarations: [
    AppComponent,
    ChordDiagramComponent,
    PhoneBrandsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
