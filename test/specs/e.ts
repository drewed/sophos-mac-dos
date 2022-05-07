import LandingPage from '../pageobjects/landing.page'

describe('Generic test', () => {
  it('Run a search on Google', async () => {
    await LandingPage.open()

    await expect(LandingPage.logo).toBeDisplayed()
    await expect(LandingPage.comment).toBeDisplayed()
    await expect(LandingPage.link).toBeDisplayed()
  })
})
