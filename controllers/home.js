const Book = require("../models/Home");

module.exports = {
    getIndex: async (req,res)=>{
       
        try{
            const books = await Book.find();
            res.render("index.ejs", { books: books});
        }catch (err) {
            console.log(err)
        }
    },
    // getRecipe: async (req, res) => {
    //     try{
    //         const recipeItems = await Book.find();
    //         const recipesLeft = await Book.countDocuments({ completed: false });
    //         res.render("book.ejs", { home: recipeItems, added: recipesLeft});
    //     }catch (err) {
    //         console.log(err)
    //     }
    // },
    createRecipe: async (req, res) => {
        try{
            await Book.create({ home: req.body.recipeItems, completed: false})
            console.log("Recipe added!");
            res.redirect("index");
        }catch (err){
            console.log(err)
        }
    }
}


