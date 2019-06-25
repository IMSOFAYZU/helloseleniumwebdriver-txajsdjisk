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
var submitButtonLocator=webdriver.By.name("btnK");
var submitButton=driver.findElement(submitButtonLocator);
submitButton.click();
//會發生錯誤！
var rcLocator=webdriver.By.className("rc");
driver.wait(webdriver.until.elementLocated(rcLocator), 10000);
var rcElements=driver.findElements(rcLocator);
console.log(rcElements);