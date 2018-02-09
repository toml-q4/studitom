import { StuditomPage } from './app.po';

describe('studitom App', () => {
  let page: StuditomPage;

  beforeEach(() => {
    page = new StuditomPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
