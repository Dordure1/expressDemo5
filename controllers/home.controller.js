const { Request, Response } = require("express")

const homeController = {

    /**
     * Méthode index du home controller
     * @param {Request} req 
     * @param {Response} res 
     */

    index : (req, res)=> { 
        res.render('home/index')
    },


    contact : (req, res)=> { 

        /// afficher page du formulaire (GET)
        res.render('home/contact')
    },
    contactPost: (req,res)=>{
        //// traiter les donnée du formulaire
        res.sendstatus(501)
    }
}
module.exports = homeController