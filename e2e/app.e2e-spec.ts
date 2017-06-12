import { SynthKitPage } from './app.po';

describe('synth-kit App', () => {
  let page: SynthKitPage;

  beforeEach(() => {
    page = new SynthKitPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
