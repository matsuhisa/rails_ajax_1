export default class FavoriteBook {
  add(userId = 1, bookId) {
    const url = '/favorites.json'
    let csrfToken = Rails.csrfToken()
    let data = {favorite: {user_id: userId, book_id: bookId}}

    return fetch(url, {
      method: "POST",
      body: JSON.stringify(data),
      dataType: 'json',
      headers: {
        "Content-Type": "application/json",
        "X-CSRF-Token": csrfToken
      }
    })
    .then(response => {
      console.log("response:")
      return response.json()
    })
  }
}
