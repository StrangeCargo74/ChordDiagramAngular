import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ChordDiagramComponent } from './chord-diagram/components/chord-diagram/chord-diagram.component';

@NgModule({
  declarations: [
    AppComponent,
    ChordDiagramComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
