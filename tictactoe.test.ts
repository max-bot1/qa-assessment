import { Builder, Capabilities, By, Button } from "selenium-webdriver"

const chromedriver = require('chromedriver')

const driver = new Builder().withCapabilities(Capabilities.chrome()).build()

beforeAll(async () => {
    await driver.get('http://localhost:4000')
})

afterAll(async () => {
    await driver.quit()
})

test('I can start a game', async () => {

    let button = await (await driver).findElement(By.id('start-game'));
    await button.click();
    
});

describe('Adding Xs to the squares', async () => {
    
    test('I can click the first square', async () => {
        let square0 = driver.findElement(By.id('cell-0'))
        await square0.click()
    })
    test('I can click the first square', async () => {
        let square2 = driver.findElement(By.id('cell-2'))
        await square2.click()
    })
    test('I can click the first square', async () => {
        let square6 = driver.findElement(By.id('cell-6'))
        await square6.click()
    })
})