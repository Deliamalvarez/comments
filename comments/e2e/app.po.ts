import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('app-root h1')).getText();
  }

  getFirstLinkElement() {
    return element(by.className('comment-link'))
  }

  getDetailPageContent() {
    return element.all(by.css('p')).map(p => {
      return p.getText();
    })
      .then(texts => {
        return texts;
      });
  }
}
