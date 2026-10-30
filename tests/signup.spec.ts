import { test, testFill ,expect } from '../fixtures/fixtures'
import { SignUpPage } from '../pages/signup'
import { signUpCredentials, signUpDetails } from '../utils/testData'

test('sign up', async ({ page, loginPage, signUpPage }) => {
    
    await page.goto('https://automationexercise.com/')
    //loginPage.signUp('Test User', 'testuser@perficient.com')
    loginPage.signUp(signUpCredentials)
    await expect(signUpPage.titleLocator).toBeVisible()
    expect(page.url()).toContain('https://automationexercise.com/signup')
    //await signUpPage.fillSignUpForm('TestPassword123', '1', 'January', '1990', 'John', 'Doe', 'Test Company', '123 Test Street', 'Test Address 2', 'United States', 'Test State', 'Test City', '12345', '123-456-7890')
    await signUpPage.fillSignUpForm(signUpDetails)
    expect(signUpPage.accountMessageLocator).toContainText('Account Created!')
    expect(page.url()).toContain('https://automationexercise.com/account_created')
} )
