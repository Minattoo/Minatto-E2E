// src/elements/CarrinhoElements.ts
import { Page, Locator } from '@playwright/test';

export default class CarrinhoElements {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  // Localizador para o carrinho de compras
  get carrinhoButton(): Locator {
    return this.page.locator('.IconHeaderCart').first(); // Primeiro ícone de carrinho
  }

  // Localizador para verificar a mensagem de carrinho vazio
  get emptyCarrinhoMessage(): Locator {
    return this.page.locator('text="Seu carrinho está vazio"'); // Ajuste o seletor conforme necessário
  }
}
