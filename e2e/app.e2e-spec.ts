import { MyGreenNationsPage } from './app.po';

describe('my-green-nations App', () => {
  let page: MyGreenNationsPage;

  beforeEach(() => {
    page = new MyGreenNationsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
