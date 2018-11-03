import { Controller } from "stimulus"

export default class extends Controller {
  static targets = [ "count" ]

  connect() {
    console.log("favorite！")
  }

  add() {
    const book_id = this.countTarget.getAttribute("data-book-id")
    let url = "/favorites"
    let csrfToken = Rails.csrfToken()
    let data = {favorite: {user_id: "1", book_id: book_id}}

    // Rails.ajax({
    //   url: url,
    //   type: "POST",
    //   data: `favorite[user_id]=1&favorite[book_id]=${book_id}`,
    //   success: function(data) {
    //     console.log(data);
    //   }
    // });

    // console.log(document.head.querySelector("meta[name=csrf-token]").content);
    // console.log(Rails.csrfToken());

    fetch(url, {
      method: "POST",
      // body: `favorite[user_id]=1&favorite[book_id]=${book_id}`,
      body: JSON.stringify(data),
      dataType: 'json',
      headers: {
        "Content-Type": "application/json",
        "X-CSRF-Token": csrfToken
      }
    })
    .then(response => {
      console.table(response);
    })
  }
}
