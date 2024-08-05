const { app, BrowserWindow } = require("electron");

const path = require("path");

function createWindow() {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true,
    },
    icon: path.join(__dirname + "/public/favicon.ico"),
  });

  win.loadURL("http://localhost:3000");
}

app.whenReady().then(createWindow);
