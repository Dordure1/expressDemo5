const mongoose =  require('mongoose')

/////creation de shema 

// - définir les champs (type, contrainte, validation,.... )
// - Ajout des options (date création/date mise à jour,.... )

const recipeSchema = mongoose.Schema({
    name : {
        type : String,
        required : true, 
        trim : true,
        maxLength : 50,
    }, 
    country : {
        type: String,
        default :null 
    },
    desc : String, 
    ingredients :{
        
        type : [
            {
                type: String, 
                minLength : 3
            }
        ],
        validate: {
           validator : (value) => value.length > 0,
           message : value => 'Minimum un ingrédient ! '
        }
    } 
    },{
        /// options 

        //- ajout des champs date de création et date d'update
        timestamps : true 

    }
)


/// Creation du model basxé sur le schéma 

const Recipe= mongoose.model("Recipe", recipeSchema)

module.exports = Recipe

