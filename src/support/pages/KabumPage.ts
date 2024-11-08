import { Page } from '@playwright/test';
import KabumElements from '../elements/KabumElements';

export default class KabumPage {  
  readonly page: Page;

  readonly kabumElements: KabumElements;

  constructor(page: Page) {
    this.page = page;
    this.kabumElements = new KabumElements(page);
  }

  // Método para buscar por "Fone"
  async searchForFone(): Promise<void> {
    await this.kabumElements.searchInput.fill('Fone'); // Preenche o campo de pesquisa com "Fone"
    //await this.kabumElements.searchButton.click(); // Clica no botão de pesquisa
  }
}
