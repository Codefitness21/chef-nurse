module.exports = {
    getIndex: (req,res)=>{
        res.render('index.ejs')
    },
//     getRecipe: async (req, res) => {
//         try{
//             const recipeItems = await Home.find();
//             const recipeGet = await Home.countDocuments({ completed: false });

//             res.render("index.ejs", { home: recipeItems, added: recipeGet});
//         }catch (err) {
//             console.log(err)
//         }
//     },
//     createRecipe: async (req, res) => {
//         try{
//             await Home.create({ home: req.body.recipeItems})
//             console.log("Recipe added!");
//             res.redirect("/");
//         }catch{
//             console.log(err)
//         }
//     }
}


