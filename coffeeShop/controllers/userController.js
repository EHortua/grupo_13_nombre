const path = require('path');

const userController = {
    userList: (req, res, next)=>{
        res.send('respond with a resource')
    },
    register: (req,res)=>{
        res.render('register', { title: 'Express' });
    },
    login: (req, res, next)=>{
        res.render('login',{title: 'Express'});
    }
}
module.exports = userController;