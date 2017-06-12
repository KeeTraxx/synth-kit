import { Component, OnInit } from '@angular/core';
import { AudioContextService } from "app/audio-context.service";

@Component({
  selector: 'app-drum-sequencer',
  templateUrl: './drum-sequencer.component.html',
  styleUrls: ['./drum-sequencer.component.scss']
})
export class DrumSequencerComponent implements OnInit {

  private beats:number = 16;
  private beatsArray = Array(16);

  private states = [0.5,0.75,1];

  constructor(private audioContextService:AudioContextService) {

  }

  private toggle(index, type) {
    this.beatsArray[index] = this.beatsArray[index] || {};
    this.beatsArray[index][type] = this.states[this.states.indexOf(this.beatsArray[index][type])+1];
  }

  ngOnInit() {
  }

}
