import {expect, Locator, Page } from "@playwright/test";

export class ProductSearchPage {
    readonly searchInputLocator: Locator
    readonly searchButtonLocator: Locator
  //  readonly searchResultsLocator: Locator
    readonly viewProductLocator:Locator
  


constructor(public readonly page: Page) {
    this.searchInputLocator = page.getByRole('textbox', { name: 'Search Product' })
    this.searchButtonLocator = page.locator('#submit_search')
    this.viewProductLocator = page.getByRole('link', { name: ' View Product' }).first()

  //  this.searchResultsLocator = page.getByRole
}

async searchFor(product:string){
    await this.searchInputLocator.fill(product)
    this.searchButtonLocator.click()
}


async expectsuccess(){
    await expect(this.page.locator('body')).toContainText('Searched Products')
}

async viewProduct(){
    await this.viewProductLocator.click()
   
}
}