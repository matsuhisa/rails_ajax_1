import FavoriteBook from "../../../app/javascript/models/favorite_book"

describe('#add', () => {
  describe('http status 200', () => {
    beforeEach(() => fetch.resetMocks())

    it('', () => {
      const favorite_book = new FavoriteBook()

      fetch.mockResponse(JSON.stringify(
        {id: 1, user_id: 1, book_id: 3 }
      ), { status: 200 })

      return favorite_book.add(1, 1).then( data => {
        expect(data).toEqual({id: 1, user_id: 1, book_id: 3})
      } )
    })
  })

  describe('http status 404', () => {
    beforeEach(() => fetch.resetMocks())

    it('', () => {
      const favorite_book = new FavoriteBook()

      fetch.mockResponse(JSON.stringify(
        { status: 404 }
      ), { status: 404 })

      return favorite_book.add(1, 1).then( data => {
        expect(data).toEqual({status: 404})
      } )
    })
  })
})
