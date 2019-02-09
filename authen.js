
const express = require('express')
const app = express()
const port = 3000

/* No database, just local memory for one user TODO */
var user = {};
var loggedin = false;

app.post('/create', (req, res) => {
		
	user['name'] = req.param('name');
	user['email'] = req.param('email'); /* no email validation..  TODO */
	user['password'] = req.param('password');  /* passwd is not encrpyted.. TODO */

	res.send(user['name'] + 'got added successfully');
});

app.post('/login', (req, res) => {
		
	if ((user['email'] == req.param('email'))  && user['password'] = req.param('password')) {
		loggedin = true;
		res.send(user['name'] + 'is logged in successfully');
	} else {
		loggedin = false;
		res.send(user['name'] + 'is login failed');
	}
});


app.listen(port, () => console.log(`Example app listening on port ${port}!`))

