console.log('Wyszukiwacz gotowy do akcji!');
chrome.tabs.onUpdated.addListener(tabId => {
    setTimeout(() => {
        chrome.tabs.executeScript(tabId, {
            file: './functionality.js'
        });
    }, 1000);
});