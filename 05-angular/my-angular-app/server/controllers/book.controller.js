const Book = require('mongoose').model('Book');

module.exports = {
  //get all resource(books)
  index(request, response) {
    Book.find({})
    .then(books => response.json(books))
    .catch(error =>response.status(500))
  },
  //get one resource
  show(request, response) {
    const { book_id : bookId } = request.params;
    Book.findById(bookId)
      .then(books => response.json(books))
      .catch(error => response.status(500).json.errors)
  },
  //create one resource
  create(request, response) {
    Book.create(request.body)
      .then(books => response.json(books))
      .catch(error => { const errors = Object.key(error.errors).map(key => error.errors[key].message); response.status(500).json.errors })
  },
  //update one resource
  update(request, response) {
  const { book_id: bookId } = request.params;
  Book.findByIdAndUpdate(bookId, request.body, {new: true})
  .then(books => response.json(books))
  .catch(error => response.status(500).json.errors)
  },
  //delete one resource
  // delete(request, response) {
  // const { book_id: bookId } = request.params;
  // Book.findByIdAndRemove(bookId)
  // .then(books => response.json(books))
  // .catch(error => response.status(500).json.errors);


  // },
}

//you can install use yarn @status/codes for codes.
