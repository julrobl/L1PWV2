import { test, expect } from '../fixtures/fixtures';

test('returns a mocked product from the products API', async ({ page }) => {
  await page.route('**/api/productsList', async (route) => {
    await route.fulfill({
      status: 200,
      contentType: 'application/json',
      body: JSON.stringify({
        responseCode: 200,
        products: [
          {
            id: 9999,
            name: 'Mock Product',
            price: 'Rs. 999',
            brand: 'Mock Brand',
            category: {
              usertype: [{ usertype: 'Women' }],
              category: 'Dress',
            },
          },
        ],
      }),
    });
  });

  await page.goto('https://automationexercise.com/products');
  const mockedProducts = await page.evaluate(async () => {
    const response = await fetch('/api/productsList');
    return response.json();
  });

  await expect(mockedProducts.products).toContainEqual(
    expect.objectContaining({ id: 9999, name: 'Mock Product' }),
  );
});