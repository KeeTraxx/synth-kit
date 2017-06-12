import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {RouterModule, Routes} from '@angular/router';
import {DrumSequencerComponent} from "app/drum-sequencer/drum-sequencer.component";
import {HomeComponent} from './home/home.component';
import {AudioContextService} from './audio-context.service';
import {NavigationComponent} from './navigation/navigation.component';
import {PlayerComponent} from './player/player.component';
import {FormsModule} from "@angular/forms";

export const appRoutes: any = [
  {
    name: 'Home',
    path: 'home',
    component: HomeComponent
  },
  {
    name: 'Drum sequencer',
    path: 'drum-sequencer',
    component: DrumSequencerComponent
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
    hidden: true
  }
];

@NgModule({
  declarations: [
    AppComponent,
    DrumSequencerComponent,
    HomeComponent,
    NavigationComponent,
    PlayerComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    AudioContextService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
