import { Controller } from "stimulus"
import FavoriteBook from '../models/favorite_book'

export default class extends Controller {
  static targets = [ "count" ]

  connect() {
    console.log("favorite！")
  }

  // foo(userId = 1, bookId) {
  //   const url = '/favorites.json'
  //   let csrfToken = Rails.csrfToken()
  //   let data = {favorite: {user_id: userId, book_id: bookId}}
  //
  //   return fetch(url, {
  //     method: "POST",
  //     body: JSON.stringify(data),
  //     dataType: 'json',
  //     headers: {
  //       "Content-Type": "application/json",
  //       "X-CSRF-Token": csrfToken
  //     }
  //   })
  //   .then(response => {
  //     console.log("response:");
  //     console.table(response.json())
  //   })
  // }

  add() {
    // const foo = this.foo(1, 1)
    // foo.then(() => console.log('end!'))

    // const promise = new Promise((resolve, reject) => {
    //     setTimeout(() => {
    //         console.log('hello');
    //         resolve();
    //     }, 1000);
    // });
    // promise.then(() => console.log('world!'));

    // const promise = new Promise((resolve, reject) => {
    //   setTimeout(() => {
    //       console.log('hello')
    //       resolve('setTimeout です')
    //   }, 1000);
    // })
    // promise.then((message) => {
    //   console.log(`${message} こんにちは`)
    // });


    const book_id = this.countTarget.getAttribute("data-book-id")
    const favoriteBook = new FavoriteBook()

    favoriteBook.add(1, book_id)
      .then( response => {
        console.log(response.book_id);
        console.log('end!')
      })

    // let url = "/favorites.json"
    // let csrfToken = Rails.csrfToken()
    // let data = {favorite: {user_id: "1", book_id: book_id}}
    //
    // fetch(url, {
    //   method: "POST",
    //   body: JSON.stringify(data),
    //   dataType: 'json',
    //   headers: {
    //     "Content-Type": "application/json",
    //     "X-CSRF-Token": csrfToken
    //   }
    // })
    // .then(response => {
    //   console.table(response.json())
    // })
  }


}
