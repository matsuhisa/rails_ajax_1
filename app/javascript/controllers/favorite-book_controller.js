import { Controller } from "stimulus"

export default class extends Controller {
  static targets = [ "count" ]

  connect() {
    console.log("favorite！")
  }

  add() {
    const book_id = this.countTarget.getAttribute("data-book-id")
    let url = "/favorites"

    // Rails.ajax({
    //   url: url,
    //   type: "POST",
    //   data: `favorite[user_id]=1&favorite[book_id]=${book_id}`,
    //   success: function(data) {
    //     console.log(data);
    //   }
    // });

    fetch(url, {
      method: "POST",
      // body: `favorite[user_id]=1&favorite[book_id]=${book_id}`,
      body: JSON.stringify({user_id: "1", book_id: book_id}),
      credentials: 'same-origin',
      dataType: 'json',
      header: {
        // "Content-Type": "application/x-www-form-urlencoded",
        'Accept': 'application/json',
        "X-Requested-With": "XMLHttpRequest",
        "Content-Type": "application/json",
        "X-CSRF-Token": Rails.csrfToken()
      }
    })
    .then(response => {
      console.table(response);
    })
  }
}
