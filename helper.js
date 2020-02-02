console.log('Wyszukiwacz gotowy do akcji!');
chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
  tab.url &&
    !tab.url.includes('chrome://') &&
    setTimeout(() => {
      chrome.tabs.executeScript(tabId, {
        file: './functionality.js',
      });
    }, 1000);
});
