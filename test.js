describe('Ecosia.org Demo', function() {

  before(browser => browser.url('https://www.baidu.com/'));

  test('Demo test ecosia.org', function (browser) {
    browser
      .waitForElementVisible('body')
      .assert.titleContains('百度一下，你就知道')
      // .assert.visible('input[type=search]')
      // .setValue('input[type=search]', 'nightwatch')
      // .assert.visible('button[type=submit]')
      // .click('button[type=submit]')
      // .assert.containsText('.mainline-results', 'Nightwatch.js')
  });

  after(browser => browser.end());
});
