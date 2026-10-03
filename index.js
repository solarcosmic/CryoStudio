import {app, BrowserWindow, screen} from 'electron';

const createWindow = () => {
    const win = new BrowserWindow({
        width: 800,
        height: 600
    });
    win.loadFile("index.html");
    const listDisplays = screen.getAllDisplays();
    var displayIds = 0;
    for (const display of listDisplays) {
        displayIds += 1;
        console.log(`Display ${displayIds} [${display.label} - ${display.size.width}x${display.size.height} @ ${display.displayFrequency || "?"}Hz]`);
    }
};

const createEmblemWindow = () => {
    const emblem = new BrowserWindow({
        width: 1280,
        height: 720
    });
    emblem.setMenu(null);
    emblem.loadFile("emblem.html");
}

app.whenReady().then(() => {
    createWindow();
    createEmblemWindow();
})