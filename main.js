const {app, BrowserWindow} = require('electron');

app.setName('My first electron App');

let mainWindow;

const createWindow = () => {
  mainWindow = new BrowserWindow({
    width: 1080,
    minWidth: 680,
    height: 840,
    title: app.getName()
  });
  
  mainWindow.loadURL(path.join('file://', __dirname, '/index.html'));
  
  //Enable Dev Tools
  mainWindow.webContents.openDevTools()
}

app.on('ready', () => createWindow());

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
});

app.on('activate', () => {
  if (mainWindow === null) {
    createWindow()
  }
});