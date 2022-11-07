const recipesClass = require("../class/recipes")

const recipeService = require("../services/recipe.service")

/// pour exo avant mongo ///
// ->  const recipes = []

const recipeController =  {
    index : async (req,res)=> {

        const recipes = await recipeService.getAll()
        const count = recipes.length

        res.render('recipe/index',{recipes, count})
    },
    newRecipe: (req,res)=>{
        res.render('recipe/newRecipe',{error: undefined})
    },

    newRecipePost: async (req,res)=>{
        const data =req.body
        console.log(data);
        
        if(!data.name){
            return res.render('recipe/add',{error :'le nom est obligatoire' })
        }


        let newrecipe = new recipesClass(req.body.name,req.body.origin, req.body.time, req.body.description, req.body.ingredients)
        // recipes.push(newrecipe)

        /// With mongo 
        await recipeService.add(data)
        //

        res.redirect('/recipe')  
    }
}

module.exports = recipeController