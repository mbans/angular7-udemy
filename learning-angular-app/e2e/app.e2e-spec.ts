import { LearningAngularAppPage } from './app.po';

describe('learning-angular-app App', function() {
  let page: LearningAngularAppPage;

  beforeEach(() => {
    page = new LearningAngularAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
