import Page from './page'

export default class HerokuPage extends Page {
  public open(path = '') {
    return super.open(`https://the-internet.herokuapp.com/${path}`)
  }
}
