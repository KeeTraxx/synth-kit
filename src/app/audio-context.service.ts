import { Injectable } from '@angular/core';

@Injectable()
export class AudioContextService {

  private audioContext:AudioContext;

  constructor() {
    console.log('audiocontexxler');
    this.audioContext = new AudioContext();
  }

  public getContext():AudioContext {
    return this.audioContext;
  }

}
