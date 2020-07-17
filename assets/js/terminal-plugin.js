document.addEventListener('keydown', (event) => {
  const keyName = event.key;

  if (keyName === '`') {
    const consoleElement = document.getElementsByClassName("terminal-plugin")[0];
    if (consoleElement.style.visibility === "hidden") {
      if (consoleElement.src === "") {
        consoleElement.src = "/terminal";
      }
      consoleElement.style.visibility = "visible";
      consoleElement.style.opacity = 1;
      consoleElement.style.top = "10vh";
      consoleElement.style.height = "80vh";
    } else {
      consoleElement.style.visibility = "hidden";
      consoleElement.style.opacity = 0;
      consoleElement.style.top = "15vh";
      consoleElement.style.height = "0";
    }
  }
}, false);