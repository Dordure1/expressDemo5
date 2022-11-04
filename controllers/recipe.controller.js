const recipesClass = require("../class/recipes")

const recipes = []


const recipeController =  {
    index : (req,res)=> {
        res.render('recipe/index',{recipes})
    },
    newRecipe: (req,res)=>{
        res.render('recipe/newRecipe')
    },
    newRecipePost: (req,res)=>{
        let newrecipe = new recipesClass(req.body.name,req.body.origin, req.body.time, req.body.description)
        recipes.push(newrecipe)
        console.log(recipes);
        res.redirect('/recipe')
    }
}

module.exports = recipeController