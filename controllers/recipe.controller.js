const recipesClass = require("../class/recipes")

const recipes = []

const recipeController =  {
    index : (req,res)=> {
        const count = recipes.length
        res.render('recipe/index',{recipes, count})
    },
    newRecipe: (req,res)=>{
        res.render('recipe/newRecipe',{error: undefined})
    },
    newRecipePost: (req,res)=>{
        const data =req.body
        console.log(data);
        
        if(!data.name){
            return res.render('recipe/add',{error :'le nom est obligatoire' })
        }


        let newrecipe = new recipesClass(req.body.name,req.body.origin, req.body.time, req.body.description, req.body.ingredients)
        recipes.push(newrecipe)
        console.log(newrecipe);
        console.log(recipes);
        res.redirect('/recipe')  
    }
}

module.exports = recipeController