window.onload = function () {
  const footer_portal = document.getElementById("footer-portal");
  const footer_expand_portal = document.getElementById("footer-expand-portal");
  const footer_expand_content = document.getElementById("footer-expand-content");
  const loadingPage = document.getElementById("loading-page");

  const height = window.innerHeight;
  const width = window.innerWidth;
  loadingPage.style.setProperty("--width", width);
  loadingPage.style.setProperty("--height", height);

  loadingPage.classList.add("collapse");

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

  footer_portal.onclick = function () {
    footer_portal.style.animation = "spin 10s cubic-bezier(0.11,0,0.82,0.73), spin 8s linear 10s infinite";
    footer_portal.style.top = "-60vh";
    footer_expand_portal.style.height = "100vh";
    setTimeout(() => {
      footer_expand_content.style.display = 'block';
      footer_expand_content.style.opacity = "1";
    }, 1000)
  };
};