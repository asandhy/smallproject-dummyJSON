const { app, BrowserWindow } = require('electron')
const path = require('path')

const express = require('express');
const fetch = require('node-fetch');
const bodyParser = require('body-parser');

const expp = express();
const port = 3000;

// Middleware
expp.use(bodyParser.urlencoded({ extended: false }));
expp.use(bodyParser.json());
expp.use(express.static('public'));


// Login page
expp.get('/', (req, res) => {
  res.sendFile(__dirname + '/login.html');
});


// Login API endpoint
expp.post('/login', (req, res) => {
  const { username, password } = req.body;

  // Fetch login API
  fetch('https://dummyjson.com/auth/login', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      username: username,
      password: password,
    }),
  })
    .then((response) => response.json())
    .then((data) => {

      if (data.token) {
		  
		console.log('Ok ...')
		
		const { mainWindow } = require('./main.js');

		BrowserWindow.getAllWindows().forEach((win) => {
			win.hide();
		})		

		mainWindow == null
		
		submainWindow = new BrowserWindow({
			width: 800,
			height: 600,
			webPreferences: {
				nodeIntegration: true
			}
		});

		ser.close()
				
	    //const server = require('./app')
		const filePath = path.join(__dirname, 'app.js');
        require(filePath);
				
		submainWindow.loadURL('http://localhost:3000')


		// Load the URL after creating the BrowserWindow		
		//submainWindow.loadFile('tess.html');		
								 
		//const {app} = require("electron");
		//const mainserver = require("./mainserver");

		//app.on("ready", () => {
		//	   mainserver.start();
		//})
		
		return
		  		  
        // res.send('LOGIN SUKSES');				
      } else {
        res.status(401).send('LOGIN GAGAL');
		return 
      }
    })
    .catch((error) => {
      console.error(error);
      res.status(500).send('Terjadi kesalahan saat memproses login');
    });
});

// Start the server
const ser = expp.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

module.exports = expp;