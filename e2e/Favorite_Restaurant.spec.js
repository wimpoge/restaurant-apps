/* eslint-disable no-undef */
const assert = require('assert')

Feature('Favorite Restaurant')

Before(({ I }) => {
  I.amOnPage('/#/favorite')
})

const emptyFavoriteRestoText = 'Halaman Favorite Kosong.'

Scenario('showing empty favorite restaurant', ({ I }) => {
  I.seeElement('#favorite')
  I.see(emptyFavoriteRestoText, '#favorite')
})

Scenario('liking one restaurant', async ({ I }) => {
  I.see(emptyFavoriteRestoText, '#favorite')
  I.wait(3)
  I.amOnPage('/')
  I.wait(3)
  I.seeElement('#query')
  const firstRestoCardTitle = await I.grabTextFrom('#restauran-card_link')
  I.click(firstRestoCardTitle)
  I.wait(3)
  I.seeElement('#likeButton')
  I.click('#likeButton')
  I.wait(3)
  I.amOnPage('/#/favorite')
  I.wait(3)
  I.seeElement('.restauran-card')
  const likedCardTitle = await I.grabTextFrom('#restauran-card_link')
  assert.strictEqual(firstRestoCardTitle, likedCardTitle)
})

Scenario('unliking one restaurant', async ({ I }) => {
  I.amOnPage('/')
  I.wait(3)
  I.seeElement('#query')
  const likedCardTitle = await I.grabTextFrom('#restauran-card_link')
  I.click(likedCardTitle)
  I.wait(3)
  I.seeElement('#likeButton')
  I.click('#likeButton')
  I.wait(3)
  I.amOnPage('/#/favorite')
  I.seeElement('#favorite')
  I.wait(3)
  I.dontSeeElement('#restauran-card')
})
