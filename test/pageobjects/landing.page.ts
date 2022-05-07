import Page from './page'

class LandingPage extends Page {
  get logo() {
    return $('<img>')
  }

  get comment() {
    return $('<p>')
  }

  get link() {
    return $('=Learn React')
  }
}

export default new LandingPage()
