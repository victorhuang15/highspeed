var profileController = {
    getProfile : function(req,res){
        
        res.json({message: 'Hi, highspeed!', id : req.params.id});
    },
    getProfiles : function (req,res)
    {

    },
    createProfile : function (req,res)
    {

    },
    updateProfile : function (req,res){

    },
    deleteProfile : function (req, res)
    {

    }
}

module.exports = profileController;