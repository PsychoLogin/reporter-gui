import { ReporterGuiPage } from './app.po';

describe('reporter-gui App', function() {
  let page: ReporterGuiPage;

  beforeEach(() => {
    page = new ReporterGuiPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
