import { CssSamplesPage } from './app.po';

describe('css-samples App', () => {
  let page: CssSamplesPage;

  beforeEach(() => {
    page = new CssSamplesPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
