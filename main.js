// Modules to control application life and create native browser window
const { app, ipcMain } = require('electron');
const win = require('./main/WindowController');
const c = require('./main/mod/crawler');

/* ipcMain.on('fetch', (event, arg) => {
	(async () => {
		event.returnValue = await c.get("https://www.zhinc.com.tw");
	})();

}); */
ipcMain.handle('fetch', async (event, arg) => {
	console.log(arg);
	const result = await c.get("https://www.zhinc.com.tw");
	return result;
});
function createWindow() {
	const w = new win();
	//w.show();
}

app.on('window-all-closed', function () {
	if (process.platform !== 'darwin') {
		app.quit()
	}
})

app.on('activate', function () {
	// On OS X it's common to re-create a window in the app when the
	// dock icon is clicked and there are no other windows open.
	if (BrowserWindow.getAllWindows().length === 0) {
		createWindow()
	}
})

//app.whenReady().then(createWindow)
app.on('ready', () => {
	createWindow();
})