import { Component, OnInit } from '@angular/core';
import { AudioContextService } from "app/audio-context.service";

@Component({
  selector: 'app-drum-sequencer',
  templateUrl: './drum-sequencer.component.html',
  styleUrls: ['./drum-sequencer.component.css']
})
export class DrumSequencerComponent implements OnInit {

  constructor(private audioContextService:AudioContextService) {
    
  }

  ngOnInit() {
  }

}
