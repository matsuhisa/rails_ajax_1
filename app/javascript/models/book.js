export default class Book {
  constructor(name, wait) {
    this.name = name
    this.wait = wait
  }

  greet() {
    return new Promise(resolve => {
      setTimeout( () => {
        return resolve(`こんにちは。 ${this.name} です`)
      }, this.wait * 1000 )
    })
  }
}
