var webdriver = require ('selenium-webdriver'),
  By = webdriver.By;
var driver = new webdriver.Builder()
  .forBrowser('chrome')
  .build();

driver.get("https://www.washingtonpost.com/");