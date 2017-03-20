import { SoundScapePage } from './app.po';

describe('sound-scape App', () => {
  let page: SoundScapePage;

  beforeEach(() => {
    page = new SoundScapePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
