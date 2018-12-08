import Book from "../../../app/javascript/models/book"

describe('#greet', () => {
  it('promise test', () => {
    const book = new Book("foo", 3)
    return book.greet().then( data => {
      console.log(data);
      expect(data).toBe("こんにちは。 foo です")
    } )
  })
})
