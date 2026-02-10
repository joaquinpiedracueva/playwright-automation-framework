import type { Locator, Page } from '@playwright/test';

export class FooterComponent {
  readonly container: Locator;
  readonly copy: Locator;
  readonly socialTwitter: Locator;
  readonly socialFacebook: Locator;
  readonly socialLinkedin: Locator;

  constructor(page: Page) {
    this.container = page.getByTestId('footer');
    this.copy = page.getByTestId('footer-copy');
    this.socialTwitter = page.getByTestId('social-twitter');
    this.socialFacebook = page.getByTestId('social-facebook');
    this.socialLinkedin = page.getByTestId('social-linkedin');
  }
}
