require("dotenv").config();

// const Book = require('../../models/Book');
const knexfile = require("../../../knexfile")[process.env.NODE_ENV];
const knex = require("knex")(knexfile);

class BookController {
  static async addBooks(req, res) {
    const { title, coverType, description, isbn, publisher, year } = req.body;

    // await Book
    //   .query()
    //   .insert({ title, coverType, description, isbn, publisher, year });

    await knex("books").insert({
      title,
      coverType,
      description,
      isbn,
      publisher,
      year
    });

    return res
      .status(201)
      .jsend({ title, message: "Book has been added to the library" });
  }
}

module.exports = { BookController };
