import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { DrumSequencerComponent } from "app/drum-sequencer/drum-sequencer.component";
import { HomeComponent } from './home/home.component';
import { AudioContextService } from './audio-context.service';

const appRoutes = [
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'drum-sequencer', 
    component: DrumSequencerComponent
  },
  { path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  }
]

@NgModule({
  declarations: [
    AppComponent,
    DrumSequencerComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    AudioContextService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
