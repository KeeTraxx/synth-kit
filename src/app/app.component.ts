import { Component, OnInit } from '@angular/core';
import { AudioContextService } from "app/audio-context.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(private audioContextService:AudioContextService) {

  }

  ngOnInit(): void {

  }
  title = 'app';
}
