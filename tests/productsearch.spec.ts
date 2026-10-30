import { testProductSearch, expect } from '../fixtures/fixtures'

testProductSearch('product search', async ({page, ProductSearchPage, ProductViewPage }) => {
    await page.goto('https://automationexercise.com/products')
    await ProductSearchPage.searchFor('dress')
    await ProductSearchPage.expectsuccess()
    await ProductSearchPage.viewProduct()
     await ProductViewPage.addToCart()
    await ProductViewPage.expectsuccess()
})