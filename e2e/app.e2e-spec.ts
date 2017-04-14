import { HighspeedSeedPage } from './app.po';

describe('highspeed-seed App', function() {
  let page: HighspeedSeedPage;

  beforeEach(() => {
    page = new HighspeedSeedPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
