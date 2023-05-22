
const createPopupElement = (tag, styles, textContent) => {
    const element = document.createElement(tag);
    Object.assign(element.style, styles);
    // element.style.textAlign = "right";
    element.textContent = textContent;
    return element;
  };

  const message = "Happy browsing!"

  
  const popup = createPopupElement("div", {
    position: "fixed",
    top: "10px",
    right: "10px",
    padding: "10px",
    backgroundColor: "rgba(0, 0, 0, 0.8)",
    color: "#fff",
    fontFamily: "Arial, sans-serif",
    fontSize: "16px",
    zIndex: "9999",
  }, message);
  
  const dismissButton = createPopupElement("button", {
    position: "absolute",
    top: "10px",
    right: "5px",
    backgroundColor: "transparent",
    border: "none",
    color: "#fff",
    fontSize: "16px",
    cursor: "pointer",
  }, "Dismiss");
  
function removePopup() {
  popup.remove();
}

dismissButton.addEventListener("click", removePopup);

popup.appendChild(dismissButton);

document.body.appendChild(popup);
