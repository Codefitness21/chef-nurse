const Book = require("../models/Home");

module.exports = {
  getIndex: async (req, res) => {
    const books = await Book.find();
    res.render('index.ejs', {books: books})
  },

  getRecipe: async (req, res) => {
    try {
      const recipeItems = await Book.find();
      const recipesLeft = await Book.countDocuments({ completed: false });
      res.render("book.ejs", { books: recipeItems, added: recipesLeft });
    } catch (err) {
      console.log(err);
    }
  },
  createRecipe: async (req, res) => {
    try {
      await Book.create({ books: req.body.books, completed: false });
      console.log("Recipe added!");
      res.redirect("/");
    } catch (err) {
      console.log(err);
    }
  },
};
