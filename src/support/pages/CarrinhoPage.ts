// src/page-objects/CarrinhoPage.ts
import { Page } from '@playwright/test';
import CarrinhoElements from '../elements/CarrinhoElements';

export default class CarrinhoPage {
  readonly page: Page;

  readonly carrinhoElements: CarrinhoElements;

  constructor(page: Page) {
    this.page = page;
    this.carrinhoElements = new CarrinhoElements(page);
  }

  // Função para clicar no carrinho
  async openCarrinho(): Promise<void> {
    await this.carrinhoElements.carrinhoButton.click();
  }
}
