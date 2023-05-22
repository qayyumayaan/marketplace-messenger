
const createPopupElement = (tag, styles, textContent) => {
    const element = document.createElement(tag);
    Object.assign(element.style, styles);
    // element.style.textAlign = "right";
    element.textContent = textContent;
    return element;
  };

  const message = "Happy browsing!"

  const justMessageHeight = "80px";
  const dismissButtonSpacingFromMainText = justMessageHeight;
  
  const popup = createPopupElement("div", {
    position: "fixed",
    top: "10px",
    right: "10px",
    padding: "10px",
    borderRadius: "10px",
    backgroundColor: "rgba(0, 0, 0, 0.8)",
    color: "#fff",
    fontFamily: "Arial, sans-serif",
    fontSize: "16px",
    textAlign: "right",
    zIndex: "9999",
    boxShadow: "10px 5px 5px blue",
    margin: "0em",
    // width: "",
  }, message);
  
  const dismissButton = createPopupElement("button", {
    position: "absolute",
    top: dismissButtonSpacingFromMainText,
    right: "5px",
    padding: "10px",
    backgroundColor: "rgba(0, 0, 0, 0.8)",
    color: "#fff",
    fontSize: "16px",
    borderRadius: "10px",
    cursor: "pointer",
    boxShadow: "10px 5px 5px blue",
    width: "100px",
  }, "Dismiss");
  
function removePopup() {
  popup.remove();
}

dismissButton.addEventListener("click", removePopup);

popup.appendChild(dismissButton);

document.body.appendChild(popup);
