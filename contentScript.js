
const createPopupElement = (tag, styles, textContent) => {
    const element = document.createElement(tag);
    Object.assign(element.style, styles);
    // element.style.textAlign = "right";
    element.textContent = textContent;
    return element;
  };

  const message = "laa ilaaha ill-allaahu wahdahu laa shareeka lah, lah-ul-mulku wa lahul-hamdu, yuhyee wa yumeetu wa huwa hayun laa yamootu, bi yadi-hil-khayru, wa huwa 'alaa kulli shay'in qadeer"

  
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
    display: "flex",
    flexDirection: "column",
  }, message);
  
  const dismissButton = createPopupElement("button", {
    marginTop: "10px",
    padding: "10px",
    marginLeft: "auto",
    backgroundColor: "rgba(0, 0, 0, 0.8)",
    right: "10px",
    color: "#fff",
    fontSize: "16px",
    borderRadius: "10px",
    cursor: "pointer",
    width: "100px",
  }, "Dismiss");
  
function removePopup() {
  popup.remove();
}

dismissButton.addEventListener("click", removePopup);

popup.appendChild(dismissButton);

document.body.appendChild(popup);
