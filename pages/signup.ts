import { expect, Locator, Page } from "@playwright/test";

export class SignUpPage {
  //  public readonly pageTitleLocator: Locator
    public readonly titleLocator: Locator
    public readonly nameSignUpLocator: Locator
    public readonly emailSignUpLocator: Locator
    public readonly passwordSignUpLocator: Locator
    public readonly dobDaySignUpLocator: Locator
    public readonly dobMonthSignUpLocator: Locator
    public readonly dobYearSignUpLocator: Locator
    public readonly newsletterCheckboxLocator: Locator
    public readonly offersCheckboxLocator: Locator
    public readonly firstNameSignUpLocator: Locator
    public readonly lastNameSignUpLocator: Locator
    public readonly companySignUpLocator: Locator
    public readonly address1SignUpLocator: Locator
    public readonly address2SignUpLocator: Locator
    public readonly countrySignUpLocator: Locator
    public readonly stateSignUpLocator: Locator
    public readonly citySignUpLocator: Locator
    public readonly zipcodeSignUpLocator: Locator
    public readonly mobileNumberSignUpLocator: Locator
    public readonly createAccountButtonLocator: Locator
    public readonly accountMessageLocator: Locator

    constructor(public readonly page: Page) {
   // this.pageTitleLocator = page.getByRole('heading', { name: 'New User Registration' })
    this.titleLocator = page.getByRole('radio', { name: 'Mr.' })
    this.nameSignUpLocator = page.getByRole('textbox', { name: 'Name' })
    this.emailSignUpLocator = page.getByRole('textbox', { name: 'Email Address' })
    this.passwordSignUpLocator = page.getByRole('textbox', { name: 'Password *' })
    this.dobDaySignUpLocator = page.locator('#days');
    this.dobMonthSignUpLocator = page.locator('#months');
    this.dobYearSignUpLocator = page.locator('#years');
    this.newsletterCheckboxLocator = page.getByRole('checkbox', { name: 'Sign up for our newsletter!' })
    this.offersCheckboxLocator = page.getByRole('checkbox', { name: 'Receive special offers from our partners!' })
    this.firstNameSignUpLocator = page.getByRole('textbox', { name: 'First name *' });
    this.lastNameSignUpLocator = page.getByRole('textbox', { name: 'Last name *' });
    this.companySignUpLocator = page.getByRole('textbox', { name: 'Company', exact: true });
    this.address1SignUpLocator = page.getByRole('textbox', { name: 'Address * (Street address, P.' });
    this.address2SignUpLocator = page.getByRole('textbox', { name: 'Address 2' })
    this.countrySignUpLocator = page.getByLabel('Country *');
    this.stateSignUpLocator = page.getByRole('textbox', { name: 'State *' });
    this.citySignUpLocator = page.getByRole('textbox', { name: 'City * Zipcode *' });
    this.zipcodeSignUpLocator = page.locator('#zipcode');
    this.mobileNumberSignUpLocator = page.getByRole('textbox', { name: 'Mobile Number *' });
    this.createAccountButtonLocator = page.getByRole('button', { name: 'Create Account' })
    this.accountMessageLocator = page.getByText('Account Created!')
    
}
    async fillSignUpForm(formData:{password: string, day: string, month: string, year: string, firstName: string, lastName: string, company: string, address1: string, address2: string, country: string, state: string, city: string, zipcode: string, mobileNumber: string}) {
        await this.titleLocator.check()
        await this.passwordSignUpLocator.fill(formData.password)
        await this.dobDaySignUpLocator.selectOption(formData.day)
        await this.dobMonthSignUpLocator.selectOption(formData.month)
        await this.dobYearSignUpLocator.selectOption(formData.year)  
        await this.newsletterCheckboxLocator.check()
        await this.offersCheckboxLocator.check()
        await this.firstNameSignUpLocator.fill(formData.firstName)
        await this.lastNameSignUpLocator.fill(formData.lastName)
        await this.companySignUpLocator.fill(formData.company)
        await this.address1SignUpLocator.fill(formData.address1)
        await this.address2SignUpLocator.fill(formData.address2)
        await this.countrySignUpLocator.selectOption(formData.country)
        await this.stateSignUpLocator.fill(formData.state)
        await this.citySignUpLocator.fill(formData.city)
        await this.zipcodeSignUpLocator.fill(formData.zipcode)
        await this.mobileNumberSignUpLocator.fill(formData.mobileNumber)
        await this.createAccountButtonLocator.click()

    }

    async verifyAccountCreated() {
        await expect(this.accountMessageLocator).toBeVisible()
    }
}