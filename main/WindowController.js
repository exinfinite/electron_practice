
const { BrowserWindow } = require('electron');
const path = require('path');
const dir = require('../config/dir');
module.exports = class WindowController {
    #windowInstances = null;
    constructor() {
        this.#windowInstances = new BrowserWindow({
            width: 1440,
            height: 1080,
            minWidth: 768,
            show: false,
            webPreferences: {
                webviewTag: true,
                nodeIntegration: true,
                preload: path.join(dir.renderer, 'preload.js'),
                nativeWindowOpen: true
            }
        });
        this.#init();
    }
    #init() {
        this.#windowInstances.setIcon(path.join(dir.icon, 'logo2.png'));
        this.#windowInstances.loadFile(path.join(dir.root, 'index.html'));
        this.#windowInstances.once('ready-to-show', () => {
            this.#windowInstances.show();
        });
        //this.#windowInstances.webContents.openDevTools();
        this.#windowInstances.webContents.on('new-window', event => event.preventDefault());//不允許另開視窗
    }
    show() {
        /* this.#windowInstances.once('ready-to-show', () => {
            this.#windowInstances.show();
        }); */
    }
    getWindow() {
        return this.#windowInstances;
    }
}