import { SuperjuicePage } from './app.po';

describe('superjuice App', function() {
  let page: SuperjuicePage;

  beforeEach(() => {
    page = new SuperjuicePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
