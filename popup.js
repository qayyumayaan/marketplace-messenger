
import {defaultMessage} from './constants.js';

document.addEventListener("DOMContentLoaded", function () {
  document.querySelector("#config").addEventListener("click", function () {
    window.open(chrome.runtime.getURL("options.html"));
  });
  chrome.storage.sync.get({
      message: defaultMessage
  }, function(items) {
      document.getElementById('message').innerText = items.message;
  });
});

document.addEventListener('DOMContentLoaded', function() {
  var paragraph = document.getElementById('message');
  paragraph.textContent = defaultMessage;
});
