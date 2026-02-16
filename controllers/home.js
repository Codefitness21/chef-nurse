const Book = require("../models/Home");

module.exports = {
    getIndex: (req,res)=>{
        res.render('index.ejs')
    },
    getRecipe: async (req, res) => {
        try{
            const recipeItems = await Book.find();
            const recipesLeft = await Book.countDocuments({ completed: false });
            res.render("book.ejs", { home: recipeItems, added: recipesLeft});
        }catch (err) {
            console.log(err)
        }
    },
    createRecipe: async (req, res) => {
        try{
            await Book.create({ home: req.body.recipeItems, completed: false})
            console.log("Recipe added!");
            res.redirect("/index");
        }catch (err){
            console.log(err)
        }
    }
}


