var userController = {
    getUser : function(req,res){
        res.json({message: 'Hi, highspeed!', id : req.params.id});
    },
    getUsers : function (req,res)
    {

    },
    createUser : function (req,res)
    {

    },
    updateUser : function (req,res){

    },
    deleteUser : function (req, res)
    {

    }
}

module.exports = userController;