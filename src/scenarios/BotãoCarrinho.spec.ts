// src/specs/Carrinho.spec.ts
import test from '@playwright/test';
import CarrinhoPage from '../support/pages/CarrinhoPage';

test('Deve abrir o carrinho', async ({ page }) => {
  const carrinhoPage = new CarrinhoPage(page);

  // Passo 1: Navega até o site da Kabum
  await page.goto('https://www.kabum.com.br');

  // Passo 2: Abre o carrinho
  await carrinhoPage.openCarrinho();
});
