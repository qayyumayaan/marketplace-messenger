
const popup = document.createElement("div");
popup.style.position = "fixed";
popup.style.top = "10px";
popup.style.right = "10px";
popup.style.padding = "10px";
popup.style.backgroundColor = "rgba(0, 0, 0, 0.8)";
popup.style.color = "#fff";
popup.style.fontFamily = "Arial, sans-serif";
popup.style.fontSize = "16px";
popup.style.zIndex = "9999";
popup.textContent = "Happy browsing!";


const dismissButton = document.createElement("button");
dismissButton.style.position = "absolute";
dismissButton.style.top = "5px";
dismissButton.style.right = "5px";
dismissButton.style.backgroundColor = "transparent";
dismissButton.style.border = "none";
dismissButton.style.color = "#fff";
dismissButton.style.fontSize = "14px";
dismissButton.style.cursor = "pointer";
dismissButton.textContent = "Dismiss";

function removePopup() {
  popup.remove();
}

dismissButton.addEventListener("click", removePopup);

popup.appendChild(dismissButton);

document.body.appendChild(popup);
