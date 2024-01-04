
const {app, BrowserWindow, ipcMain} = require('electron')
const path = require('path')

const exps = require('express');
const expr = exps();

const ser  = require('./index')

let mainWindow

function createWindow () {
  mainWindow = new BrowserWindow({
    width: 1280,
    height: 768,
    webPreferences: {
      nodeIntegration: true,
	  preload: path.join(__dirname, 'preload.js')
    }
  })

	// ........................................ server - login UI
	mainWindow.loadURL('http://localhost:3000')
	
	// mainWindow.loadFile('login.html');
					
    mainWindow.on('closed', function () {
    mainWindow = null
	
  })
}

app.on('some-event-to-hide-main-window', () => {
  if (mainWindow) {
    mainWindow.hide();
  }
});

app.on('ready', createWindow)

app.on('resize', function(e,x,y){
  mainWindow.setSize(x, y);
});

app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', function () {
  if (mainWindow === null) {
    createWindow()
  }
})


// Main UI page
expr.post('/main', (req, res) => {	

	// mainWindow.close()
	const server = require('./app')
	
	submainWindow = new BrowserWindow({
		width: 1280,
		height: 768,
		webPreferences: {
		nodeIntegration: true
		//preload: path.join(__dirname, 'preload.js')
        }
    })
	
	// ...........................................server main App
	submainWindow.loadURL('http://localhost:4000')
	
});


ipcMain.on('logged', async (event, args) => {

	// const server = require('./app')
	// mainWindow.loadURL('http://localhost:4000')
})


ipcMain.handle('login', async (event, { username, password }) => {
		try {
			const response = await fetch('https://dummyjson.com/auth/login', {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify({ username, password }),
			});

			const data = await response.json();

			if (data.token) {
				return { success: true, message: 'Login berhasil' };
			} else {
				return { success: false, message: 'Login gagal. Cek kembali username dan password.' };
			}
		} catch (error) {
			console.error('Terjadi kesalahan:', error);
			return { success: false, message: 'Terjadi kesalahan saat memproses login' };
		}
});	



