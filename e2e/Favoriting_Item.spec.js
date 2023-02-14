const assert = require('assert');

Feature('Favoriting Item');

Before(({ I }) => {
  I.amOnPage('/#/favorite');
});

Scenario('showing empty favorite foods and movies', ({ I }) => {
  I.seeElement('#favorite-content');
  I.see('Empty Favorite Foods!', '#fav-food');
  I.see('Empty Favorite Restaurants!', '#fav-restaurant');
});

Scenario('favoriting an item and show them on favorite page', async ({ I }) => {
  I.see('Empty Favorite Restaurants', '#fav-restaurant');

  I.amOnPage('/');

  I.waitForElement('.see-more a', 2);
  I.click(locate('.see-more a').first());

  I.waitForElement('#fav-button', 2);
  const articleName = await I.grabTextFrom('.article-title');
  I.click(locate('#fav-button'));

  I.amOnPage('/#/favorite');

  I.seeElement('.article-item');
  const favName = await I.grabTextFrom('.article-title');
  assert.strictEqual(articleName, favName);
});

Scenario('unfavoriting an item and show empty text', async ({ I }) => {
  I.see('Empty Favorite Restaurants!', '#fav-restaurant');

  I.amOnPage('/');

  I.waitForElement('.see-more a', 2);
  I.click(locate('.see-more a').first());

  I.waitForElement('#fav-button', 2);
  const articleName = await I.grabTextFrom('.article-title');
  I.click(locate('#fav-button'));

  I.amOnPage('/#/favorite');

  I.seeElement('.article-item');
  I.click('.see-more a');

  I.waitForElement('#fav-button', 2);
  const favedName = await I.grabTextFrom('.article-title');
  I.click(locate('#fav-button'));

  assert(articleName, favedName);

  I.amOnPage('/#/favorite');

  I.see('Empty Favorite Restaurants!', '#fav-restaurant');
});
