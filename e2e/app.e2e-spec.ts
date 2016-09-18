import { QmtisWebsitePage } from './app.po';

describe('qmtis-website App', function() {
  let page: QmtisWebsitePage;

  beforeEach(() => {
    page = new QmtisWebsitePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
