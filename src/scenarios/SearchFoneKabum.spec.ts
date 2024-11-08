import { expect, test } from '@playwright/test';
import KabumPage from '../support/pages/KabumPage';

test('Deve realizar uma busca por Fone', async ({ page }) => {
  const kabumPage = new KabumPage(page);

  // Passo 1: Navega até o site da Kabum
  await page.goto('https://www.kabum.com.br');

  // Passo 2: Realiza a busca por "Fone"
  await kabumPage.searchForFone();

  // Verifica se a URL contém o termo "fone"
  //await expect(page).toHaveURL(/.*fone/i);
});
