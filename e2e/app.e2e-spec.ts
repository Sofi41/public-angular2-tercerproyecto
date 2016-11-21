import { Angular2TercerproyectoPage } from './app.po';

describe('angular2-tercerproyecto App', function() {
  let page: Angular2TercerproyectoPage;

  beforeEach(() => {
    page = new Angular2TercerproyectoPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
