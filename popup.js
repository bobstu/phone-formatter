document.addEventListener("DOMContentLoaded", function () {
  const formatButton = document.getElementById("formatButton");

  formatButton.addEventListener("click", function () {
    // Get the active tab and its tabId.
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
      if (tabs[0]) {
        const tabId = tabs[0].id;
        // Send a message to the background script with the tabId.
        chrome.runtime.sendMessage({ action: "formatNumbers", tabId: tabId });
      }
    });
  });
});
