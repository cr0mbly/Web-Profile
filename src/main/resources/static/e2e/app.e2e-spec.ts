import { AngularGetTestPage } from './app.po';

describe('angular-get-test App', function() {
  let page: AngularGetTestPage;

  beforeEach(() => {
    page = new AngularGetTestPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
