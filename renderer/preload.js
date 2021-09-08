const { ipcRenderer } = require('electron');
ipcRenderer.on('ipc-reply', (event, arg) => {
  console.log(arg);
});
console.log('preload');
//console.log(ipcRenderer.sendSync('fetch', 'ipc-from-renderer'));
//async
ipcRenderer.invoke('fetch', 'ipc-from-renderer').then((result) => {
  console.log(result);
});
console.log('fetch sended');