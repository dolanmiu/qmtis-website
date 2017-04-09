import { QmtisNewPage } from './app.po';

describe('qmtis-new App', () => {
  let page: QmtisNewPage;

  beforeEach(() => {
    page = new QmtisNewPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
