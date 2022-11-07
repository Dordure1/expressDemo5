require('dotenv-flow').config()

/// récupération variable d'environement
const {NODE_ENV , PORT, URL_MONGODB} = process.env
const exp = require('constants');
const express = require('express');
require('express-async-errors')

const router = require('./routers');

/// Connection à la db
const database = require('./database');
const Recipe = require('./models/recipe.model');
database(URL_MONGODB)
    .then((db)=>{
        console.log('Mongo DB successfull');

        /// Pour créer donnée dans db
      
        // const r = new Recipe({name : "Demo", ingredients : ["mayo"]})
        // r.save().then(()=>{
        //     console.log('ok');
        // })
        ////

    })
    .catch((e)=>{
        console.log((('conneciton error')));
        console.log(e);

        process.exit(1)
    })


const app = express()

//////////////////////////////////////
/// Configuration du serveur 

// - fichier static
app.use(express.static('public'))

//- gestion des formulaires
app.use(express.urlencoded({extended:true}))

/////////////////////////////////////


/// Config moteur de vue 
app.set('view engine','ejs')

/// pas besoin car dossier views est un mot clé reconnu
app.set('views', 'views')





app.use(router)



app.listen(PORT,()=> {
    console.log(`Server up on port: ${PORT}, in ${NODE_ENV} mode`);
})