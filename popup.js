document.addEventListener("DOMContentLoaded", function () {
  document.querySelector("#config").addEventListener("click", function () {
    window.open(chrome.runtime.getURL("options.html"));
  });
  chrome.storage.sync.get({
      message: "laa ilaaha ill-allaahu wahdahu laa shareeka lah, lah-ul-mulku wa lahul-hamdu, yuhyee wa yumeetu wa huwa hayun laa yamootu, bi yadi-hil-khayru, wa huwa 'alaa kulli shay'in qadeer." // Default message
  }, function(items) {
      document.getElementById('message').innerText = items.message;
  });
});