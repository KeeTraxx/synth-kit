import { Component, OnInit } from '@angular/core';
import { AudioContextService } from "app/audio-context.service";
import {appRoutes} from "./app.module";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  private appRoutes;

  constructor(private audioContextService:AudioContextService) {
    this.appRoutes = appRoutes;
  }

  ngOnInit(): void {

  }
  title = 'Synth-Kit';
}
