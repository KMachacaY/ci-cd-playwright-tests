# CI/CD Playwright Tests

End-to-end test suite integrated with GitHub Actions CI/CD pipeline.

## Pipeline Features

- Automated test execution on every Pull Request
- Secrets injected as environment variables — values never exposed in logs
- Inline test results visible directly on the PR via test reporter
- HTML report uploaded as artifact on every run (pass or fail)
- JUnit XML report for integration with reporting tools
- Screenshot and video evidence captured on test failure
- Build fails automatically when any test fails
- Concurrent runs cancelled automatically when a new commit is pushed

## Project Structure

tests/

├── main.spec.js          # Core functionality tests

├── env-config.spec.js    # Environment and secrets validation

└── failing.spec.js       # Intentional failure to verify CI detection

.github/

└── workflows/

└── playwright-ci.yml # CI/CD pipeline definition

playwright.config.js      # Playwright configuration

## Secrets Required

| Secret | Description |
|--------|-------------|
| `QA_API_URL` | Base URL of the environment under test |
| `QA_TOKEN` | Authentication token for API access |

## How to Run Locally

```bash
npm ci
npx playwright install chromium
npx playwright test --project=chromium
npx playwright show-report
```

## How the Pipeline Works

1. Developer opens a Pull Request against `main`
2. Workflow triggers automatically
3. Secrets are injected as environment variables
4. Secrets are validated — only their length is logged, never the value
5. Playwright installs browsers and runs all tests
6. Test results published inline on the PR via dorny/test-reporter
7. HTML report and JUnit XML uploaded as artifacts
8. PR check shows green (pass) or red (fail)
9. Artifacts available for download for 30 days