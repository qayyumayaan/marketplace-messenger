// Create a div element for the pop-up message
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

// Append the pop-up message to the document body
document.body.appendChild(popup);
