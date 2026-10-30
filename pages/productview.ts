import {expect, Locator, Page } from "@playwright/test";

  
export class ProductViewPage{
    readonly qtyLabel:Locator
    readonly addToCartLocator:Locator
    
    constructor (public readonly page: Page){
        this.qtyLabel = page.getByText('Quantity:')
        this.addToCartLocator = page.getByRole('button', { name: ' Add to cart' })
    }

    async addToCart(){
    await expect(this.qtyLabel).toBeVisible()
    this.addToCartLocator.click()
    }

    async expectsuccess(){
        await expect(this.page.locator('body')).toContainText('Added!')
    }
}
