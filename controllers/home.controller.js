const { Request, Response } = require("express")

const homeController = {

    /**
     * Méthode index du home controller
     * @param {Request} req 
     * @param {Response} res 
     */

    index : (req, res)=> { 
        console.log(req.session.userId);
        res.render('home/index')
    },


    contact : (req, res)=> { 

        /// afficher page du formulaire (GET)
        res.render('home/contact')
    },
    contactPost: (req,res)=>{
        //// traiter les donnée du formulaire
        // console.log(req.body);
        const {email, pseudo, message} = req.body
        console.log(email);
        res.render('home/response',{
            name: !!pseudo? pseudo : email
            //idem
            // name: pseudo===''? pseudo : email
            //idem 
            // name:pseudo||email
        })
    }
}
module.exports = homeController