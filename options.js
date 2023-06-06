document.addEventListener('DOMContentLoaded', restoreOptions);

const defaultMessage = "laa ilaaha ill-allaahu wahdahu laa shareeka lah, lah-ul-mulku wa lahul-hamdu, yuhyee wa yumeetu wa huwa hayun laa yamootu, bi yadi-hil-khayru, wa huwa 'alaa kulli shay'in qadeer"

window.onload = function() {
    document.getElementById('save').addEventListener('click', saveOptions);
    restoreOptions();
    document.getElementById('restore').addEventListener('click', restoreDefaults);

};


// Restores select box and checkbox state using the preferences
// stored in chrome.storage.
function restoreOptions() {
  chrome.storage.sync.get({
    message: defaultMessage
  }, function(items) {
    document.getElementById('message').value = items.message;
  });
}

// Saves options to chrome.storage.sync.
function saveOptions() {
    console.log("Saved")
  const message = document.getElementById('message').value;
  chrome.storage.sync.set({
    message: message
  }, function() {
    const status = document.getElementById('status');
    status.textContent = 'Options saved.';
    setTimeout(function() {
      status.textContent = '';
    }, 750);
  });
}

// Restores default options
function restoreDefaults() {
  chrome.storage.sync.set({
    message: defaultMessage
  }, function() {
    document.getElementById('message').value = defaultMessage;
    const status = document.getElementById('status');
    status.textContent = 'Options restored.';
    setTimeout(function() {
      status.textContent = '';
    }, 750);
  });
}
