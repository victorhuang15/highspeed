var config = require('../config');
var Sequelize = require('sequelize');
var sequelize = new Sequelize(config.db);

var User = sequelize.define('user',{

    id :{
        type:Sequelize.INTEGER,
        autoIncrement : true,
        primaryKey : true
    },
    username :{
        type: Sequelize.STRING,
        field: 'username'
    },
    password : {
        type:Sequelize.STRING, 

    }

});

module.exports = User;