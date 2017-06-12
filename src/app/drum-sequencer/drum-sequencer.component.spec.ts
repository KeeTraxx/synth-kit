import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DrumSequencerComponent } from './drum-sequencer.component';

describe('DrumSequencerComponent', () => {
  let component: DrumSequencerComponent;
  let fixture: ComponentFixture<DrumSequencerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DrumSequencerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DrumSequencerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
