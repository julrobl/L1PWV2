import {test as base, expect} from '@playwright/test'
import { LoginPage } from '../pages/loginpage'
import { SignUpPage } from '../pages/signup'
import { ContactPage } from '../pages/contactpage'
import { ProductSearchPage } from '../pages/productsearch'
import { ProductViewPage } from '../pages/productview'


export const test = base.extend<{ loginPage: LoginPage; signUpPage: SignUpPage }>({
    loginPage: async ({ page }, use) => {
        const loginPage = new LoginPage(page)
        await use(loginPage)
    },
    signUpPage: async ({ page }, use) => {
        const signUpPage = new SignUpPage(page)
        await use(signUpPage)
    }
});

export const testFill = base.extend<{ loginPage: LoginPage; signUpPage: SignUpPage }>({
    loginPage: async ({ page }, use) => {
        const loginPage = new LoginPage(page)
        await use(loginPage)
    },
    signUpPage: async ({ page }, use) => {
        const signUpPage = new SignUpPage(page)
        await use(signUpPage)
    }
})

export const testContact = base.extend<{ contactPage: ContactPage }>({
    contactPage: async ({ page }, use) => {
        const contactPage = new ContactPage(page) 
        await use(contactPage)
    }
})

export const testProductSearch = base.extend<{
    ProductSearchPage: ProductSearchPage
    ProductViewPage: ProductViewPage
}>({
    ProductSearchPage: async ({ page }, use) => {
        const productSearchPage = new ProductSearchPage(page)
        
        await use(productSearchPage)
    },
  ProductViewPage: async ({ page }, use) => {
        const productViewPage = new ProductViewPage(page)
        await use(productViewPage)
    }
})

export const testProductView = base.extend<{ ProductViewPage: ProductViewPage}>({
    ProductViewPage: async ({ page }, use) =>{
        const productViewPage = new ProductViewPage(page)
        await use(productViewPage)
    }
})

export { expect }