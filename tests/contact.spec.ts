import { testContact   , expect } from '../fixtures/fixtures';
import { contactFormData } from '../utils/testData';

testContact('contact form submission', async ({ page, contactPage }) => {
    await page.goto('https://automationexercise.com/contact_us')
    page.once('dialog', async (dialog) => {
    await dialog.accept();
    });
    await contactPage.fillContactForm(contactFormData)
    await contactPage.submitContactForm()
    // await contactPage.acceptDialog()
    await contactPage.expectSuccess()
    //await expect(contactPage.successMessageLocator).toContainText('Success! Your details have been submitted successfully.') 
})