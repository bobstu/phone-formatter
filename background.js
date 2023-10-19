chrome.runtime.onMessage.addListener(function (message, sender, sendResponse) {
  if (message.action === "formatNumbers") {
    const tabId = message.tabId;
    // Execute the content script in the active tab using the tabId.
    chrome.scripting.executeScript({
      target: { tabId: tabId },
      function: formatNumbers
    });
  }
});

function formatNumbers() {
  const regex = /(\d{3})(\d{3})(\d{4})/;
  const formatted = window.getSelection().toString().replace(regex, "$1-$2-$3");
  const range = window.getSelection().getRangeAt(0);
  range.deleteContents();
  range.insertNode(document.createTextNode(formatted));
}
