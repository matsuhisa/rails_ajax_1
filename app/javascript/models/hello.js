export default class Hello {
  constructor(name) {
    this.name = name
  }

  greet() {
    return `こんにちは。 ${this.name} です`
  }
}
