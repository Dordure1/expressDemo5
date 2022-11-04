require('dotenv-flow').config()

/// récupération variable d'environement
const {NODE_ENV , PORT} = process.env
const express = require('express');
const router = require('./routers');

const app = express()


/// Configuration du serveur 
app.use(express.static('public'))


/// Config moteur de vue 
app.set('view engine','ejs')

/// pas besoin car dossier views est un mot clé reconnu
app.set('views', 'views')





app.use(router)



app.listen(PORT,()=> {
    console.log(`Server up on port: ${PORT}, in ${NODE_ENV} mode`);
})