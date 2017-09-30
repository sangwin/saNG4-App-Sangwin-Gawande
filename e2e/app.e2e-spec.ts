import { SaNG4DemoAppPage } from './app.po';

describe('sa-ng4-demo-app App', () => {
  let page: SaNG4DemoAppPage;

  beforeEach(() => {
    page = new SaNG4DemoAppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
