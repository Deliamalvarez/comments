import { AppPage } from './app.po';

describe('comments App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Comments summary list');
  });


  it('should have a comment-link class element with a link value', () => {
    page.navigateTo();
    expect(page.getFirstLinkElement().getText()).toEqual('Read more...');
    expect(page.getFirstLinkElement().getAttribute('ng-reflect-router-link')).toEqual('/detail,1');
  });

  it('should navigate into detail page', () => {
    const detailedText = ['Name: id labore ex et quam laborum',
      'Email Address: Eliseo@gardner.biz',
      'Comment: laudantium enim quasi est quidem magnam voluptate ipsam eos tempora quo necessitatibus dolor quam autem quasi reiciendis et nam sapiente accusantium']
    page.navigateTo();
    page.getFirstLinkElement().click();
    expect(page.getDetailPageContent()).toEqual(detailedText);
  });

});
