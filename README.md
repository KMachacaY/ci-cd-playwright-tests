# CI/CD Playwright Tests

End-to-end test suite integrated with GitHub Actions CI/CD pipeline.

## Pipeline Features

- Automated test execution on every Pull Request
- Secrets injected as environment variables — values never exposed in logs
- HTML report uploaded as artifact on every run (pass or fail)
- JUnit XML report for integration with reporting tools
- Screenshot and video evidence captured on test failure
- Build fails automatically when any test fails

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
4. Playwright installs browsers and runs all tests
5. HTML report and JUnit XML are uploaded as artifacts
6. PR check shows green (pass) or red (fail)
7. Artifacts available for download for 30 days