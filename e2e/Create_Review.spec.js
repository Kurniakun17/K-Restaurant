Feature('Create Review');

Before(({ I }) => {
  I.amOnPage('/');
});

Scenario('Create a review and show the review', ({ I }) => {
  I.waitForElement('.article-item', 2);
  I.seeElement('.article-item');

  I.click(locate('.see-more a').at(5));

  I.waitForElement('.article-item.detailed');

  I.fillField('#form input', 'kurnia');
  I.fillField('#form textarea', 'restoran ini enak');
  I.click('Submit');

  I.see('kurnia', '.review-item h4');
  I.see('restoran ini enak', '.review-item p');
});
