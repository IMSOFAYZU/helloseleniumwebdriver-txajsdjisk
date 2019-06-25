const DRIVER = "geckodriver"; //chromedriver
const BROWSER = "firefox"; //chrome

var webdriver = require("selenium-webdriver");
require(DRIVER);

async function execute() {
    var builder = new webdriver.Builder();
    builder.forBrowser(BROWSER);
    var driver = builder.build();
    await driver.get("http://www.google.com.tw");
    var qLocator = webdriver.By.name("q");
    await driver.wait(webdriver.until.elementLocated(qLocator), 3000);
    var qElement = await driver.findElement(qLocator);
    await qElement.sendKeys("Hello!");
    var submitButtonLocator = webdriver.By.name("btnK");
    await driver.wait(webdriver.until.elementLocated(submitButtonLocator), 3000);
    var submitButton = await driver.findElement(submitButtonLocator);
    await submitButton.click();

    var rcLocator = webdriver.By.className("rc");
    await driver.wait(webdriver.until.elementLocated(rcLocator), 10000);
    var rcElements = await driver.findElements(rcLocator);
    for(let rcElement of rcElements){
        console.log(await rcElement.getText());
    }
    driver.close();
}

execute();