
const express = require('express')
const router = express.Router()
const port = 3000

/* No database, just local memory for one user TODO */
var user = {};
var loggedin = false;

router.post('/user/create', (req, res) => {
		
	user['name'] = req.param('name');
	user['email'] = req.param('email'); /* no email validation..  TODO */
	user['password'] = req.param('password');  /* passwd is not encrpyted.. TODO */

	res.send(user['name'] + 'got added successfully');
});

router.post('/user/login', (req, res) => {
		
	if ((user['email'] == req.param('email'))  && user['password'] = req.param('password')) {
		loggedin = true;
		res.send(user['name'] + 'is logged in successfully');
	} else {
		loggedin = false;
		res.send(user['name'] + 'is login failed');
	}
});

router.post('/user/reset', (req, res) => {
		
	if (user['email'] == req.param('email')) {
		loggedin = false;
		router.redirect('/user/create'); /* recreate the user, in our case only one user, so /user/create should be fine */
	} else {
		loggedin = false;
		res.send(user['name'] + 'is login failed');
	}
});

module.exports = router
