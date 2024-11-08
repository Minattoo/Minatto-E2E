import { Page, Locator } from '@playwright/test';

export default class KabumElements {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  // Localizador para o campo de busca
  get searchInput(): Locator {
    return this.page.locator('#input-busca');
  }

  // Localizador para o botão de pesquisa
  get searchButton(): Locator {
    return this.page.locator('button[type="submit"]');
  }

  async pressEnterInSearch(): Promise<void> {
    await this.searchInput.press('Enter');
  }
}
