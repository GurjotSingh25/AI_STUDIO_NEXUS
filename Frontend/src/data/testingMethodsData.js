export const testingMethods = [
  {
    id: "manual-testing",
    title: "Manual Testing",
    shortDescription: "Testing software by hand without automation tools",
    description:
      "Manual testing means checking the application manually to find bugs by following real user scenarios.",
    whenToUse: [
      "When learning how an application works",
      "During early development",
      "For UI and user flow testing",
      "For exploratory testing",
      "When automation is not cost-effective"
    ],
    
    category: "functional",
    level: "Beginner",
    speed: "Slow",
    owner: "QA Team",
    
   
    quickStartTemplate: {
      language: "markdown",
      code: `# Manual Test Case Template

## Test Case ID: TC_001
## Feature: User Login

### Pre-conditions:
- User must have valid credentials
- Application is accessible

### Test Steps:
1. Navigate to login page
2. Enter valid username
3. Enter valid password
4. Click "Login" button

### Expected Result:
- User is redirected to dashboard
- Welcome message displays username

### Actual Result:
[To be filled during testing]

### Status: 
[ ] Pass  [ ] Fail

### Notes:
[Any observations or issues]
`
    },

    codeExample: {
      title: "Selenium Script for Manual Test Validation",
      language: "python",
      code: `# You can automate manual test steps later
from selenium import webdriver

def test_login_flow():
    driver = webdriver.Chrome()
    driver.get("https://example.com/login")
    
    # Step 1: Enter username
    driver.find_element("id", "username").send_keys("test@example.com")
    
    # Step 2: Enter password
    driver.find_element("id", "password").send_keys("password123")
    
    # Step 3: Click login
    driver.find_element("id", "login-btn").click()
    
    # Verify: Check dashboard loads
    assert "Dashboard" in driver.title
    driver.quit()
`
    },

    tools: [
      { name: "Browser DevTools", useCase: "Inspect elements, check console logs" },
      { name: "Spreadsheet", useCase: "Document test cases and results" },
      { name: "Screen Recorder", useCase: "Record bug reproduction steps" },
      { name: "Postman", useCase: "API testing manually" }
    ],

    benefits: [
      "Easy for beginners",
      "No coding required",
      "Helps understand application behavior",
      "Catches UX issues automation might miss",
      "Cost-effective for small projects"
    ],

    
    bestPractices: [
      "Document every test case clearly",
      "Use a consistent test case template",
      "Take screenshots for defects",
      "Test on multiple browsers and devices",
      "Create regression test checklists"
    ],

    
    commonPitfalls: [
      "Not documenting test steps properly",
      "Skipping edge cases",
      "Testing only happy paths",
      "Forgetting to test on different environments",
      "Not reporting issues promptly"
    ],

    cicdIntegration: {
      platform: "N/A",
      config: `# Manual testing doesn't integrate with CI/CD
# But you can use tools like TestRail or Zephyr to manage test cases
# and link them to your deployment pipeline for tracking`,
      notes: "Manual testing is typically done after automated tests pass in CI/CD pipeline"
    },

    realWorldExample: {
      scenario: "E-commerce Checkout Flow",
      description: "Testing the complete purchase journey manually to ensure smooth user experience",
      steps: [
        "Add product to cart",
        "Proceed to checkout",
        "Enter shipping details",
        "Select payment method",
        "Review order",
        "Complete purchase",
        "Verify confirmation email"
      ]
    },

    example: "Open login page → enter wrong password → check error message shows → verify user cannot access dashboard"
  },

  {
    id: "unit-testing",
    title: "Unit Testing",
    shortDescription: "Test individual functions or components in isolation.",
    description:
      "Unit testing focuses on testing the smallest testable parts of an application such as functions, classes, or components. It ensures correctness at the code level before integration.",
    whenToUse: [
      "While developing new features",
      "Before committing code",
      "During refactoring",
      "For TDD (Test-Driven Development)",
      "To catch bugs early in development"
    ],

    category: "functional",
    level: "Intermediate",
    speed: "Fast",
    owner: "Developers",

    quickStartTemplate: {
      language: "javascript",
      code: `// Jest Unit Test Template
import { calculateTax } from './utils';

describe('Tax Calculator', () => {
  test('calculates 10% tax correctly', () => {
    const result = calculateTax(100, 0.10);
    expect(result).toBe(10);
  });

  test('handles zero amount', () => {
    const result = calculateTax(0, 0.10);
    expect(result).toBe(0);
  });

  test('throws error for negative amounts', () => {
    expect(() => calculateTax(-100, 0.10)).toThrow();
  });
});

// Run: npm test
`
    },

    codeExample: {
      title: "React Component Unit Test",
      language: "javascript",
      code: `import { render, screen, fireEvent } from '@testing-library/react';
import LoginButton from './LoginButton';

describe('LoginButton Component', () => {
  test('renders login button', () => {
    render(<LoginButton />);
    const button = screen.getByText(/login/i);
    expect(button).toBeInTheDocument();
  });

  test('calls onClick when clicked', () => {
    const handleClick = jest.fn();
    render(<LoginButton onClick={handleClick} />);
    
    const button = screen.getByText(/login/i);
    fireEvent.click(button);
    
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  test('is disabled when loading', () => {
    render(<LoginButton loading={true} />);
    const button = screen.getByText(/login/i);
    expect(button).toBeDisabled();
  });
});
`
    },

    tools: [
      { name: "Jest", useCase: "JavaScript/React testing framework" },
      { name: "Mocha + Chai", useCase: "Node.js testing with assertions" },
      { name: "JUnit", useCase: "Java unit testing" },
      { name: "PyTest", useCase: "Python testing framework" },
      { name: "Vitest", useCase: "Fast Vite-native testing" }
    ],

    benefits: [
      "Early bug detection",
      "Faster development with quick feedback",
      "Improved code quality and design",
      "Easy refactoring with safety net",
      "Living documentation of code behavior"
    ],

    bestPractices: [
      "Follow AAA pattern: Arrange, Act, Assert",
      "Test one thing per test case",
      "Use descriptive test names",
      "Mock external dependencies",
      "Aim for 80%+ code coverage",
      "Keep tests fast (milliseconds)"
    ],

    commonPitfalls: [
      "Testing implementation details instead of behavior",
      "Not mocking external dependencies",
      "Writing tests that depend on each other",
      "Ignoring edge cases",
      "Over-mocking leading to false confidence"
    ],

    cicdIntegration: {
      platform: "GitHub Actions",
      config: `name: Unit Tests

on: [push, pull_request]

jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: '18'
      
      - run: npm ci
      - run: npm test -- --coverage
      
      - name: Upload coverage
        uses: codecov/codecov-action@v3
`,
      notes: "Run unit tests on every commit to catch issues early"
    },

    realWorldExample: {
      scenario: "E-commerce Cart Calculation",
      description: "Testing cart total calculation logic in isolation",
      steps: [
        "Test adding items to cart",
        "Test removing items",
        "Test quantity updates",
        "Test discount calculations",
        "Test tax calculations",
        "Test edge cases (empty cart, negative quantities)"
      ]
    },

    example: "Testing a calculateTax() function with inputs 100 and 0.1, expecting output 10"
  },

    {
    id: "integration-testing",
    title: "Integration Testing",
    shortDescription: "Verify interaction between multiple modules.",
    description:
      "Integration testing checks how different modules or services work together after unit testing. It ensures APIs, databases, and services communicate correctly.",
    whenToUse: [
      "After unit testing",
      "When APIs interact",
      "Microservices communication",
      "Database operations",
      "Third-party integrations"
    ],

    category: "functional",
    level: "Intermediate",
    speed: "Medium",
    owner: "Developers",

    quickStartTemplate: {
      language: "javascript",
      code: `// Supertest Integration Test Template
const request = require('supertest');
const app = require('../app');

describe('User API Integration Tests', () => {
  test('POST /users creates new user', async () => {
    const response = await request(app)
      .post('/api/users')
      .send({
        name: 'John Doe',
        email: 'john@example.com'
      })
      .expect(201);

    expect(response.body.user.email).toBe('john@example.com');
  });

  test('GET /users/:id retrieves user from database', async () => {
    const response = await request(app)
      .get('/api/users/1')
      .expect(200);

    expect(response.body.user).toHaveProperty('id');
    expect(response.body.user).toHaveProperty('email');
  });
});
`
    },

    codeExample: {
      title: "Database Integration Test with Testcontainers",
      language: "javascript",
      code: `const { GenericContainer } = require('testcontainers');
const { Client } = require('pg');

describe('Database Integration', () => {
  let container;
  let client;

  beforeAll(async () => {
    // Start PostgreSQL container
    container = await new GenericContainer('postgres:15')
      .withEnvironment({ POSTGRES_PASSWORD: 'test' })
      .withExposedPorts(5432)
      .start();

    // Connect to database
    client = new Client({
      host: container.getHost(),
      port: container.getMappedPort(5432),
      user: 'postgres',
      password: 'test'
    });
    await client.connect();
  });

  afterAll(async () => {
    await client.end();
    await container.stop();
  });

  test('inserts and retrieves data', async () => {
    await client.query(\`
      CREATE TABLE users (id SERIAL PRIMARY KEY, name TEXT)
    \`);
    await client.query('INSERT INTO users (name) VALUES ($1)', ['Alice']);
    
    const result = await client.query('SELECT * FROM users');
    expect(result.rows[0].name).toBe('Alice');
  });
});
`
    },

    tools: [
      { name: "Postman", useCase: "API testing and automation" },
      { name: "Supertest", useCase: "HTTP assertions for Node.js" },
      { name: "REST Assured", useCase: "Java REST API testing" },
      { name: "Testcontainers", useCase: "Lightweight database instances" },
      { name: "WireMock", useCase: "Mock external HTTP services" }
    ],

    benefits: [
      "Detects interface issues between modules",
      "Validates data flow across layers",
      "Improves system reliability",
      "Tests real database interactions",
      "Catches integration bugs early"
    ],

    bestPractices: [
      "Use test databases (Docker containers recommended)",
      "Clean up data after each test",
      "Test both happy and error paths",
      "Mock only external third-party services",
      "Use realistic test data",
      "Run integration tests in CI/CD"
    ],

    commonPitfalls: [
      "Testing against production database",
      "Slow tests due to lack of cleanup",
      "Not isolating tests from each other",
      "Over-relying on mocks instead of real integrations",
      "Ignoring network failures and timeouts"
    ],

    cicdIntegration: {
      platform: "GitLab CI",
      config: `integration-tests:
  stage: test
  services:
    - postgres:15
    - redis:7
  variables:
    DATABASE_URL: "postgresql://postgres:test@postgres:5432/testdb"
    REDIS_URL: "redis://redis:6379"
  script:
    - npm install
    - npm run test:integration
  only:
    - merge_requests
    - main
`,
      notes: "Use service containers for databases and dependencies"
    },

    realWorldExample: {
      scenario: "Payment Gateway Integration",
      description: "Testing the flow from order creation to payment processing",
      steps: [
        "Create order in database",
        "Call payment gateway API",
        "Receive payment confirmation",
        "Update order status",
        "Send confirmation email",
        "Verify all systems are in sync"
      ]
    },

    example: "Testing API → Service → Database flow: POST /orders creates order in DB and returns 201"
  },

  {
    id: "system-testing",
    title: "System Testing",
    shortDescription: "Test the complete application as a whole.",
    description:
      "System testing validates the entire application against business requirements in an environment similar to production.",
    whenToUse: [
      "Before UAT (User Acceptance Testing)",
      "Before deployment to production",
      "After all integration tests pass",
      "To validate end-to-end workflows"
    ],

    category: "functional",
    level: "Advanced",
    speed: "Slow",
    owner: "QA Team",

    quickStartTemplate: {
      language: "javascript",
      code: `// Playwright E2E Test Template
const { test, expect } = require('@playwright/test');

test.describe('Complete User Journey', () => {
  test('user can sign up, login, and purchase', async ({ page }) => {
    // Sign up
    await page.goto('https://example.com/signup');
    await page.fill('#email', 'test@example.com');
    await page.fill('#password', 'SecurePass123');
    await page.click('button[type="submit"]');
    await expect(page).toHaveURL(/dashboard/);

    // Add product to cart
    await page.goto('/products');
    await page.click('text=Buy Now');
    await expect(page.locator('.cart-count')).toHaveText('1');

    // Checkout
    await page.click('text=Checkout');
    await page.fill('#card-number', '4242424242424242');
    await page.click('text=Complete Purchase');
    
    // Verify success
    await expect(page.locator('.success-message')).toBeVisible();
  });
});
`
    },

    codeExample: {
      title: "Cypress Full System Test",
      language: "javascript",
      code: `describe('E-commerce Full Flow', () => {
  beforeEach(() => {
    // Reset database to known state
    cy.task('db:seed');
  });

  it('completes full purchase journey', () => {
    // Login
    cy.visit('/login');
    cy.get('[data-testid="email"]').type('user@example.com');
    cy.get('[data-testid="password"]').type('password123');
    cy.get('button').contains('Login').click();
    cy.url().should('include', '/dashboard');

    // Browse and add to cart
    cy.get('[data-testid="product-1"]').click();
    cy.get('button').contains('Add to Cart').click();
    cy.get('.cart-badge').should('contain', '1');

    // Checkout
    cy.get('[data-testid="cart-icon"]').click();
    cy.get('button').contains('Proceed to Checkout').click();

    // Fill shipping
    cy.get('#address').type('123 Main St');
    cy.get('#city').type('New York');
    cy.get('#zip').type('10001');

    // Payment
    cy.get('#card-number').type('4111111111111111');
    cy.get('#cvv').type('123');
    cy.get('button').contains('Place Order').click();

    // Verify order confirmation
    cy.get('.order-confirmation').should('be.visible');
    cy.get('.order-number').should('exist');
  });
});
`
    },

    tools: [
      { name: "Selenium", useCase: "Cross-browser automated testing" },
      { name: "Cypress", useCase: "Modern web application testing" },
      { name: "Playwright", useCase: "Multi-browser automation" },
      { name: "TestCafe", useCase: "Node.js E2E testing" },
      { name: "Appium", useCase: "Mobile application testing" }
    ],

    benefits: [
      "End-to-end validation of complete workflows",
      "Requirement verification against specs",
      "Catches integration issues across entire system",
      "Validates user experience",
      "Provides confidence before production release"
    ],

    bestPractices: [
      "Test critical user journeys first",
      "Use Page Object Model pattern",
      "Make tests independent and reusable",
      "Run tests in parallel when possible",
      "Use data-testid attributes for selectors",
      "Implement proper wait strategies"
    ],

    commonPitfalls: [
      "Brittle tests due to UI changes",
      "Flaky tests from timing issues",
      "Testing too many scenarios (slow suite)",
      "Not cleaning up test data",
      "Hardcoding test data and credentials"
    ],

    cicdIntegration: {
      platform: "GitHub Actions",
      config: `name: E2E Tests

on: [push]

jobs:
  e2e:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
      
      - name: Install dependencies
        run: npm ci
      
      - name: Install Playwright Browsers
        run: npx playwright install --with-deps
      
      - name: Run E2E tests
        run: npm run test:e2e
      
      - name: Upload test results
        if: always()
        uses: actions/upload-artifact@v3
        with:
          name: playwright-report
          path: playwright-report/
`,
      notes: "Run E2E tests on staging environment before production deployment"
    },

    realWorldExample: {
      scenario: "Banking Application System Test",
      description: "Complete testing of online banking features",
      steps: [
        "Login to banking portal",
        "View account balance",
        "Transfer money between accounts",
        "Pay bills",
        "Download statements",
        "Logout",
        "Verify all transactions recorded correctly"
      ]
    },

    example: "Testing complete flow: Login → Browse Products → Add to Cart → Checkout → Payment → Order Confirmation"
  },

  {
    id: "regression-testing",
    title: "Regression Testing",
    shortDescription: "Ensure existing features still work after changes.",
    description:
      "Regression testing ensures that new code changes do not break existing functionality. It's critical for maintaining software quality over time.",
    whenToUse: [
      "After bug fixes",
      "After new feature addition",
      "Before every release",
      "After refactoring code",
      "During hotfix deployments"
    ],

    category: "functional",
    level: "Intermediate",
    speed: "Medium",
    owner: "QA Team",

    quickStartTemplate: {
      language: "javascript",
      code: `// Regression Test Suite Template
const { test, expect } = require('@playwright/test');

// Tag tests for regression suite
test.describe('Regression Suite', () => {
  test('@regression: Login functionality', async ({ page }) => {
    await page.goto('/login');
    await page.fill('#email', 'test@example.com');
    await page.fill('#password', 'password');
    await page.click('button[type="submit"]');
    await expect(page).toHaveURL(/dashboard/);
  });

  test('@regression: Search feature', async ({ page }) => {
    await page.goto('/search');
    await page.fill('#search-input', 'laptop');
    await page.press('#search-input', 'Enter');
    await expect(page.locator('.search-results')).toBeVisible();
  });

  test('@regression: Cart operations', async ({ page }) => {
    // Test that cart still works after checkout changes
    await page.goto('/products');
    await page.click('text=Add to Cart');
    await expect(page.locator('.cart-count')).toHaveText('1');
  });
});

// Run: npx playwright test --grep @regression
`
    },

    codeExample: {
      title: "Automated Regression Test Suite",
      language: "javascript",
      code: `// Visual Regression Testing with Percy
const { test } = require('@playwright/test');
const percySnapshot = require('@percy/playwright');

test.describe('Visual Regression', () => {
  test('homepage visual regression', async ({ page }) => {
    await page.goto('/');
    await percySnapshot(page, 'Homepage');
  });

  test('product page visual regression', async ({ page }) => {
    await page.goto('/products/1');
    await percySnapshot(page, 'Product Page');
  });
});

// Comparison Test Suite
describe('API Regression Tests', () => {
  const baselineResponses = require('./baseline-responses.json');

  test('user API returns same structure', async () => {
    const response = await fetch('/api/users/1');
    const data = await response.json();
    
    // Compare with baseline
    expect(Object.keys(data)).toEqual(
      Object.keys(baselineResponses.user)
    );
  });
});
`
    },

    tools: [
      { name: "Selenium Grid", useCase: "Parallel regression testing" },
      { name: "Cypress", useCase: "Fast regression test execution" },
      { name: "TestNG", useCase: "Java test suite management" },
      { name: "Percy", useCase: "Visual regression testing" },
      { name: "BackstopJS", useCase: "CSS regression testing" }
    ],

    benefits: [
      "Prevents unexpected failures from new changes",
      "Improves software stability",
      "Catches side effects of code changes",
      "Provides safety net for refactoring",
      "Reduces production bugs"
    ],

    bestPractices: [
      "Automate regression tests completely",
      "Maintain a focused regression suite (don't test everything)",
      "Run regression tests before every release",
      "Use test tags to organize regression tests",
      "Keep regression suite fast (under 30 mins)",
      "Update tests when requirements change"
    ],

    commonPitfalls: [
      "Running full test suite for every change (too slow)",
      "Not updating tests when features change",
      "Including flaky tests in regression suite",
      "Testing too many edge cases",
      "Not prioritizing critical user paths"
    ],

    cicdIntegration: {
      platform: "Jenkins",
      config: `pipeline {
  agent any
  
  stages {
    stage('Regression Tests') {
      parallel {
        stage('API Regression') {
          steps {
            sh 'npm run test:api:regression'
          }
        }
        stage('UI Regression') {
          steps {
            sh 'npm run test:e2e:regression'
          }
        }
        stage('Visual Regression') {
          steps {
            sh 'npm run test:visual:regression'
          }
        }
      }
    }
  }
  
  post {
    failure {
      emailext (
        subject: "Regression Test Failed",
        body: "Check Jenkins for details",
        to: "team@example.com"
      )
    }
  }
}
`,
      notes: "Run regression tests nightly and before releases"
    },

    realWorldExample: {
      scenario: "Social Media App After New Feature",
      description: "After adding 'Stories' feature, verify existing features still work",
      steps: [
        "Login/Logout functionality",
        "Post creation and editing",
        "Comment and like features",
        "Profile updates",
        "Friend requests",
        "Messaging",
        "Verify 'Stories' didn't break any existing feature"
      ]
    },

    example: "After adding password reset feature, re-test login flow to ensure it still works correctly"
  },

  {
    id: "performance-testing",
    title: "Performance Testing",
    shortDescription: "Measure speed, scalability, and stability.",
    description:
      "Performance testing evaluates how the system behaves under various load conditions, measuring response times, throughput, and resource utilization.",
    whenToUse: [
      "Before production release",
      "For high-traffic systems",
      "After infrastructure changes",
      "To establish performance baselines",
      "Before marketing campaigns (expected traffic spike)"
    ],

    category: "non-functional",
    level: "Advanced",
    speed: "Slow",
    owner: "DevOps/QA",

    quickStartTemplate: {
      language: "javascript",
      code: `// k6 Load Test Template
import http from 'k6/http';
import { check, sleep } from 'k6';

export let options = {
  stages: [
    { duration: '2m', target: 100 },  // Ramp up to 100 users
    { duration: '5m', target: 100 },  // Stay at 100 users
    { duration: '2m', target: 0 },    // Ramp down
  ],
  thresholds: {
    http_req_duration: ['p(95)<500'], // 95% requests under 500ms
    http_req_failed: ['rate<0.01'],   // Error rate < 1%
  },
};

export default function () {
  const response = http.get('https://api.example.com/users');
  
  check(response, {
    'status is 200': (r) => r.status === 200,
    'response time < 500ms': (r) => r.timings.duration < 500,
  });
  
  sleep(1);
}

// Run: k6 run script.js
`
    },

    codeExample: {
      title: "JMeter-like Stress Test with Artillery",
      language: "yaml",
      code: `# artillery-config.yml
config:
  target: "https://api.example.com"
  phases:
    - duration: 60
      arrivalRate: 10        # 10 users/sec for 1 min
      name: "Warm up"
    - duration: 300
      arrivalRate: 50        # 50 users/sec for 5 min
      name: "Sustained load"
    - duration: 120
      arrivalRate: 100       # 100 users/sec for 2 min
      name: "Stress test"
  
scenarios:
  - name: "API Load Test"
    flow:
      - get:
          url: "/api/products"
          capture:
            - json: "$.products[0].id"
              as: "productId"
      - get:
          url: "/api/products/{{ productId }}"
      - think: 2               # Wait 2 seconds
      - post:
          url: "/api/cart"
          json:
            productId: "{{ productId }}"
            quantity: 1

# Run: artillery run artillery-config.yml
`
    },

    tools: [
      { name: "k6", useCase: "Modern load testing, developer-friendly" },
      { name: "JMeter", useCase: "Enterprise-grade performance testing" },
      { name: "Gatling", useCase: "Scala-based load testing" },
      { name: "Artillery", useCase: "Quick HTTP/WebSocket load tests" },
      { name: "Locust", useCase: "Python-based distributed load testing" }
    ],

    benefits: [
      "Identifies bottlenecks before production",
      "Improves user experience through faster responses",
      "Validates infrastructure capacity",
      "Prevents downtime during high traffic",
      "Helps with capacity planning"
    ],

    bestPractices: [
      "Test on production-like environment",
      "Start with baseline tests",
      "Gradually increase load (ramp-up)",
      "Monitor server resources (CPU, memory, network)",
      "Test different scenarios (peak load, sustained load, stress)",
      "Set clear performance goals (SLAs)",
      "Run tests from multiple geographic locations"
    ],

    commonPitfalls: [
      "Testing on local/development environment",
      "Not monitoring backend metrics",
      "Testing with unrealistic data volumes",
      "Ignoring database performance",
      "Not testing edge cases (timeouts, errors)",
      "Running tests during production hours"
    ],

    cicdIntegration: {
      platform: "GitHub Actions",
      config: `name: Performance Tests

on:
  schedule:
    - cron: '0 2 * * *'  # Run nightly at 2 AM
  workflow_dispatch:     # Manual trigger

jobs:
  performance:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      
      - name: Run k6 load test
        uses: grafana/k6-action@v0.3.0
        with:
          filename: tests/performance/load-test.js
      
      - name: Upload results
        uses: actions/upload-artifact@v3
        with:
          name: k6-results
          path: summary.json
      
      - name: Check thresholds
        run: |
          if grep -q "failed" summary.json; then
            echo "Performance thresholds failed!"
            exit 1
          fi
`,
      notes: "Run performance tests nightly on staging environment"
    },

    realWorldExample: {
      scenario: "Black Friday E-commerce Load Test",
      description: "Prepare for 100x normal traffic during sale event",
      steps: [
        "Simulate 10,000 concurrent users",
        "Test product browsing under load",
        "Test checkout process",
        "Test payment gateway capacity",
        "Monitor database query performance",
        "Check CDN and caching effectiveness",
        "Verify system can handle 500 orders/minute",
        "Ensure error rate stays below 0.1%"
      ]
    },

    example: "Simulating 10,000 concurrent users hitting /api/products and measuring if 95% of requests complete under 500ms"
  }

];