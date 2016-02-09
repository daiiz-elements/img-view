var createMainWindow = function (width, height) {
    chrome.app.window.create('sample/index.html', {
        width: 600,
        height: 400,
        type: 'shell',
        singleton: false
    }, function (appWindow) {
    });
}

createMainWindow();
