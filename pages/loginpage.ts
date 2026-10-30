import { Locator, Page, expect } from "@playwright/test";

export class LoginPage {
    public readonly signUpLinkLocator: Locator
    public readonly nameLocator: Locator
    public readonly emailLocatorSignIn: Locator
    public readonly emailLocatorSignUp: Locator
    public readonly passwordLocator: Locator
    public readonly loginButtonLocator: Locator
    public readonly signUpButtonLocator: Locator
    public readonly errorMessageLocator: Locator

    constructor(public readonly page: Page) {
        this.signUpLinkLocator = page.getByRole('link', { name: 'Signup / Login' })
        this.nameLocator = page.getByRole('textbox', { name: 'Name' })
        this.emailLocatorSignIn = page.locator('form').filter({hasText:'Login'}).getByPlaceholder('Email Address')
        this.emailLocatorSignUp = page.locator('form').filter({hasText:'Signup'}).getByPlaceholder('Email Address')
        this.passwordLocator = page.getByRole('textbox', { name: 'Password' })
        this.loginButtonLocator = page.getByRole('button', { name: 'Login' })
        this.signUpButtonLocator = page.getByRole('button', { name: 'Signup' })
        this.errorMessageLocator = page.getByText('Your email or password is')
    }

    async signUp(formData:{name: string, email: string}) {
        await this.signUpLinkLocator.click()
        await this.nameLocator.fill(formData.name)
        await this.emailLocatorSignUp.fill(formData.email)
        await this.signUpButtonLocator.click()
    }

    async login(formData:{email: string, password:string}){
        await this.signUpLinkLocator.click()
        await this.emailLocatorSignIn.fill(formData.email)
        await this.passwordLocator.fill(formData.password)
        await this.loginButtonLocator.click()
    }

    async verifyIncorrectCredentials() {
            await expect(this.errorMessageLocator).toBeVisible()
    }

}
