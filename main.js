const { app, BrowserWindow, Menu } = require('electron');
function create() {
  Menu.setApplicationMenu(null);
  const w = new BrowserWindow({ width: 900, height: 640, minWidth: 720, minHeight: 540, useContentSize: true, autoHideMenuBar: true, backgroundColor: '#2a1a0f', title: 'Cờ Vua Gỗ' });
  w.loadFile('index.html');
}
app.whenReady().then(create);
app.on('window-all-closed', () => app.quit());
