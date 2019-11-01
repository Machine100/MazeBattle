import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GenerateComponent } from './components/generate/generate.component';
import { PlayercontrolComponent } from './components/playercontrol/playercontrol.component';

@NgModule({
  declarations: [
    AppComponent,
    GenerateComponent,
    PlayercontrolComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
