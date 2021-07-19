const path = require('path');

const controller = {
    index: (req, res, next)=>{
        res.render('index', { title: 'Express' })
    },
    contacto: (req,res)=>{
        res.sendFile(path.join(__dirname,'../views/contacto.html'));
    }
}
module.exports = controller;