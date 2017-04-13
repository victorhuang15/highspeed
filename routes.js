var express = require('express');
var profileController = require('./controller/profile');
var userController = require ('./controller/user');

var router = express.Router();

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