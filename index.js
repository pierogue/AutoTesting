import { assert } from "chai";
import { Builder, By, Key, until } from 'selenium-webdriver';
import {SL_Chrome} from "chai/sauce.browsers.js";

const searchTest = async () => {
  const driver = new Builder().forBrowser(SL_Chrome.browserName).build();
  try {
    await driver.get('https://music.yandex.by/home');
    const closeButtonSelector = By.xpath('//*[@class="pay-promo-close-btn js-close"]');
    const searchButtonSelector = By.xpath('//*[@class="d-search__button__container"]/button');
    const searchInputSelector = By.xpath('//input[@class="d-input__field deco-input d-input__field_size-S deco-input_suggest"]');

    const closeButton = await driver.findElement(closeButtonSelector);
    closeButton.click();
    const searchButton = await driver.findElement(searchButtonSelector);
    await searchButton.click();

    const searchInput = await driver.findElement(searchInputSelector);
    const productName = "Woodbine Winhand";
    await searchInput.sendKeys(productName);


    return true;
  } catch (err) {
    console.log(err)
    return false;
  } finally {
    await driver.quit();
  }
}

describe('Test search', () => {
  it('should be founded', async () => {
    assert.isTrue(await searchTest());
  })
})