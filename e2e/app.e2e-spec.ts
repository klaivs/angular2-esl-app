import { Angular2ESLappPage } from './app.po';

describe('angular2-eslapp App', () => {
  let page: Angular2ESLappPage;

  beforeEach(() => {
    page = new Angular2ESLappPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
