import { Controller } from "stimulus"

export default class extends Controller {
  static targets = [ "count" ]

  connect() {
    console.log("favorite！")
  }

  add() {
    const book_id = this.countTarget.getAttribute("data-book-id")
    let url = "/favorites.json"
    let csrfToken = Rails.csrfToken()
    let data = {favorite: {user_id: "1", book_id: book_id}}

    fetch(url, {
      method: "POST",
      body: JSON.stringify(data),
      dataType: 'json',
      headers: {
        "Content-Type": "application/json",
        "X-CSRF-Token": csrfToken
      }
    })
    .then(response => {
      console.table(response.json())
    })
  }
}
