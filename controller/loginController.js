var jwt = require('jsonwebtoken');
var config = require('../config');

var loginController = {
   authenticate : function(req, res)
   {
     
        var user = {
            name : req.body.name,
            password: req.body.password
        };
        if(user.password == '1234')
        {
            var token = jwt.sign(user, config.secret,{
                expiresIn : 86400
            });
            res.json({
                success: true,
                message:'token generated',
                token:token    
            });
        }
        else{
            console.log(user.name+";;"+user.password);
            res.json({success:false, user: user.name, pass: user.password, message:'authentication failed'});
        }
    
   }
}

module.exports = loginController;