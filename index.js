const DRIVER="geckodriver"; //chromedriver
const BROWSER="firefox"; //chrome

var webdriver = require("selenium-webdriver");
require(DRIVER);

var builder = new webdriver.Builder();
builder.forBrowser(BROWSER);
var driver=builder.build();
driver.get("http://www.google.com.tw");
var qLocator=webdriver.By.name("q");
driver.wait(webdriver.until.elementLocated(qLocator), 3000);
var qElement=driver.findElement(qLocator);
qElement.sendKeys("Hello!");