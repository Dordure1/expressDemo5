const Recipe = require("../models/recipe.model")

const recipeService = {

    getAll : async () => {
        return Recipe.find()

        /// Si je veux avoir l'id et le name
        // return Recipe.find({}, ["_id", "name"])
    },

    getById : async (id) => {
        // return Recipe.findById(id)
        //or 
        return Recipe.findOne({_id:id})
    },

    add : async ({name,desc,country,ingredients})=>{
        
        // const r = new Recipe({name,desc,country,ingredients})
        // await r.save()

        return await Recipe.create({name,desc,country,ingredients})
    }
}
module.exports = recipeService