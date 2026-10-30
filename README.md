# Playwright UI Automation Framework

This repository contains a TypeScript end-to-end testing framework built with
[Playwright Test](https://playwright.dev/docs/test-intro). The tests exercise
the public [Automation Exercise](https://automationexercise.com/) website.

## Framework structure

```text
.
├── fixtures/
│   └── fixtures.ts          # Extended Playwright tests and page-object fixtures
├── pages/
│   ├── contactpage.ts       # Contact Us page interactions and assertions
│   ├── loginpage.ts         # Signup and login interactions
│   ├── productsearch.ts     # Product search and product selection
│   ├── productview.ts       # Product details and add-to-cart checks
│   └── signup.ts            # Account registration form
├── tests/
│   ├── contact.spec.ts      # Contact form submission
│   ├── login.spec.ts        # Invalid-credentials login check
│   ├── productdata.spec.ts  # Mocked products API response check
│   ├── productsearch.spec.ts# Search, open a product, and add-to-cart flow
│   └── signup.spec.ts       # Account registration flow
├── utils/
│   └── testData.ts          # Test data for forms and credentials
├── playwright.config.ts     # Playwright projects, browser, reporting, and artifacts
└── package.json             # Dependencies and npm scripts
```

## Key capabilities implemented

- **Page Object Model:** Page-specific locators and actions are grouped in
  classes under `pages/`.
- **Reusable fixtures:** `fixtures/fixtures.ts` constructs page objects and
  provides them to tests.
- **UI end-to-end coverage:** Scenarios cover account signup, invalid login,
  contact form submission, product search, viewing a product, and adding a
  product to the cart.
- **Assertions:** Tests use Playwright's `expect` assertions for visible
  elements, page content, and URLs.
- **API response mocking:** `productdata.spec.ts` intercepts
  `**/api/productsList` and verifies the mocked response with a browser-side
  fetch. This test checks the API mock; it does not verify that the mocked
  product is rendered in the website UI.
- **Chromium configuration:** The configured browser project uses desktop
  Chrome settings. Firefox and WebKit configuration examples are currently
  commented out.
- **Failure diagnostics:** Screenshots and videos are retained on test failure;
  tracing is enabled. HTML reports are written to `reports/html-report`, and
  test artifacts to `reports/test-artifacts`.
- **CI-aware execution:** CI runs use one worker and retry failed tests twice;
  local runs use Playwright's default worker count and do not retry.

## Requirements

- Node.js and npm
- Dependencies installed from `package-lock.json`
- Playwright's Chromium browser installed

Install dependencies and the browser if needed:

```bash
npm install
npx playwright install chromium
```

## Running tests

Run the full suite:

```bash
npm test
```

Run tests in the Chromium project:

```bash
npm run test:chromium
```

Open Playwright UI mode:

```bash
npm run test:ui
```

Run a single test file:

```bash
npx playwright test tests/productsearch.spec.ts --project=chromium
```

After a test run, open the HTML report with:

```bash
npx playwright show-report reports/html-report
```