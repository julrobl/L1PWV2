import { test,expect } from '../fixtures/fixtures'
import { loginCredentials } from '../utils/testData'

test('login with wrong credentials', async ({ page, loginPage }) => {
    
    await page.goto('https://automationexercise.com/')
    loginPage.login(loginCredentials)
    await loginPage.verifyIncorrectCredentials()
    expect(loginPage.errorMessageLocator).toContainText('Your email or password is incorrect!')
    
} )