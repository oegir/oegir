const { test, expect } = require('@playwright/test')

test('loads the correct visible sidebar for every resume language', async ({ page }) => {
  const cases = [
    ['resume.md', 'Profile', '#/resume'],
    ['ru/resume.md', 'Профиль', '#/ru/resume'],
    ['bg/resume.md', 'Профил', '#/bg/resume']
  ]

  for (const [resume, expectedText, expectedSidebarPath] of cases) {
    await page.goto('/index.html#/' + resume)
    await expect(page.locator('.sidebar-nav')).toContainText(expectedText)
    await expect(page.locator('.sidebar-nav a').first()).toHaveAttribute('href', new RegExp('^' + expectedSidebarPath + '(?:\\?|$)'))

    await expect(page.getByRole('link', { name: 'English' })).toHaveAttribute('href', '#/resume')
    await expect(page.getByRole('link', { name: 'Русский' })).toHaveAttribute('href', '#/ru/resume')
    await expect(page.getByRole('link', { name: 'Български' })).toHaveAttribute('href', '#/bg/resume')
  }
})

test('publishes crawler discovery files and direct resume sources', async ({ request }) => {
  const resources = [
    ['robots.txt', 'Sitemap: https://oegir.github.io/oegir/sitemap.xml'],
    ['sitemap.xml', 'https://oegir.github.io/oegir/docs/resume.md'],
    ['llms.txt', 'https://oegir.github.io/oegir/docs/bg/resume.md'],
    ['docs/resume.md', 'PHP Backend Developer'],
    ['docs/ru/resume.md', 'PHP Backend-разработчик'],
    ['docs/bg/resume.md', 'PHP Backend разработчик']
  ]

  for (const [path, expectedText] of resources) {
    const response = await request.get('/' + path)
    expect(response.ok()).toBeTruthy()
    expect(await response.text()).toContain(expectedText)
  }
})

test('exposes canonical and language source metadata', async ({ page }) => {
  await page.goto('/index.html', { waitUntil: 'domcontentloaded' })

  await expect(page.locator('link[rel="canonical"]')).toHaveAttribute('href', 'https://oegir.github.io/oegir/')
  await expect(page.locator('link[rel="alternate"][hreflang="en"]')).toHaveAttribute('href', 'https://oegir.github.io/oegir/docs/resume.md')
  await expect(page.locator('link[rel="alternate"][hreflang="ru"]')).toHaveAttribute('href', 'https://oegir.github.io/oegir/docs/ru/resume.md')
  await expect(page.locator('link[rel="alternate"][hreflang="bg"]')).toHaveAttribute('href', 'https://oegir.github.io/oegir/docs/bg/resume.md')
})
