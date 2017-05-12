import { NextDigitorialPage } from './app.po';

describe('next-digitorial App', () => {
  let page: NextDigitorialPage;

  beforeEach(() => {
    page = new NextDigitorialPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
