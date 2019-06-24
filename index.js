const DRIVER="geckodriver"; //chromedriver
const BROWSER="firefox"; //chrome

var webdriver = require("selenium-webdriver");
require(DRIVER);

var builder = new webdriver.Builder();
builder.forBrowser(BROWSER);
var driver=builder.build();
driver.get("http://www.google.com.tw");