var express = require('express');
var profileController = require('./controller/profileController');
var userController = require ('./controller/userController');
var loginController =require('./controller/loginController');
var router = express.Router();

//login
router.route('/login').post(loginController.authenticate);

//profile router
router.route('/profile/:id').get(profileController.getProfile);
router.route('/profile/:id').put(profileController.updateProfile);
router.route('/profile/:id').delete(profileController.deleteProfile);
router.route('/profile').post(profileController.createProfile);
router.route('/profiles').get(profileController.getProfiles);

//user router
router.route('/user/:id').get(userController.getUser);
router.route('/user/:id').put(userController.updateUser);
router.route('/user/:id').delete(userController.deleteUser);
router.route('/user').post(userController.createUser);
router.route('/user').get(userController.getUsers);




module.exports = router;