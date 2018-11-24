import { Controller } from "stimulus"
import FavoriteBook from '../models/favorite_book'

export default class extends Controller {
  static targets = [ "count" ]

  connect() {
    console.log("favorite！")
  }

  add() {
    const book_id = this.countTarget.getAttribute("data-book-id")
    const user_id = 1
    const favoriteBook = new FavoriteBook()

    favoriteBook.add(user_id, book_id)
      .then( response => {
        console.log(response.book_id);
        console.log('end!')
      })
  }
}
