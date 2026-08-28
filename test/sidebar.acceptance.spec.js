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
