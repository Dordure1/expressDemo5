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
        res.render('home/contact')
    }
}
module.exports = homeController