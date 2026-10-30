import { expect, Locator, Page } from "@playwright/test";

export class ContactPage {
    public readonly pageTitleLocator: Locator
    public readonly contactFormLocator: Locator
    public readonly nameLocator: Locator
    public readonly emailLocator: Locator
    public readonly subjectLocator: Locator
    public readonly messageLocator: Locator
    public readonly submitButtonLocator: Locator
    public readonly successMessageLocator: Locator

    constructor(public readonly page: Page) {
        this.pageTitleLocator = page.getByRole('heading', { name: 'Contact Us' })
        this.contactFormLocator = page.getByRole('form', { name: 'Contact Form' })
        this.nameLocator = page.getByRole('textbox', { name: 'Name' })
        this.emailLocator = page.getByRole('textbox', { name: 'Email', exact: true })
        this.subjectLocator = page.getByRole('textbox', { name: 'Subject' })
        this.messageLocator = page.getByRole('textbox', { name: 'Message' })
        this.submitButtonLocator = page.getByRole('button', { name: 'Submit' })
        this.successMessageLocator = page.getByText('Success! Your details have')
    }

    async fillContactForm(formData:{name: string, email: string, subject: string, message: string}) {
        await this.nameLocator.fill(formData.name)
        await this.emailLocator.fill(formData.email)
        await this.subjectLocator.fill(formData.subject)
        await this.messageLocator.fill(formData.message)
    }

    async acceptDialog() {
    this.page.once('dialog', async (dialog) => {
      await dialog.accept();
    });
  }

    async submitContactForm() {
        await this.submitButtonLocator.click()
    }

      async expectSuccess() {
    await expect(this.page.locator('body')).toContainText('Success! Your details have been submitted successfully.');
  }
}