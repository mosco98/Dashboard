chrome.browserAction.onClicked.addListener((activeTab) => {
  const newURL = 'src/browser_action/index.html'
  chrome.tabs.create({ url: newURL })
})
