window.onload = function () {
  const footer_portal = document.getElementById("footer-portal");
  const footer_expand_portal = document.getElementById("footer-expand-portal");
  const footer_expand_content = document.getElementById("footer-expand-content");
  const loadingPage = document.getElementById("loading-page");
  const header_writing = document.getElementById("header-writing");
  const header_design = document.getElementById("header-design");
  const home_writing = document.getElementById("home-writing");
  const home_design = document.getElementById("home-design");
  const header_body = document.getElementById("home-header");
  const ss_logo = document.getElementById("ss-logo");
  const home_header_text = document.getElementById("home-header-text");
  let page_state = "home";

  const height = window.innerHeight;
  const width = window.innerWidth;
  loadingPage.style.setProperty("--width", width);
  loadingPage.style.setProperty("--height", height);

  loadingPage.classList.add("collapse");

  header_writing.onclick = function () {
    page_state = "writing";
    if (width <= 800) {
      header_body.style.opacity = "0";
    } else {
      header_body.style.left = "-35vw";
    }
    home_design.style.opacity = "0";
    home_header_text.style.opacity = "0";
    home_header_text.style.top = "0";
    setTimeout(() => {
      home_design.style.display = "none";
      home_header_text.style.display = "none";
      header_design.style.display = "block";
    }, 700);
    setTimeout(() => {
      home_writing.style.display = "block";
      setTimeout(() => {
        home_writing.style.opacity = "1";
        header_writing.style.display = "none";
      }, 200);
    }, 600);
  };


  header_design.onclick = function () {
    page_state = "design";
    if (width <= 800) {
      header_body.style.opacity = "0";
    } else {
      header_body.style.left = "35vw";
    }
    home_writing.style.opacity = "0";
    home_header_text.style.opacity = "0";
    home_header_text.style.top = "0";
    setTimeout(() => {
      home_header_text.style.display = "none";
      home_writing.style.display = "none";
      header_writing.style.display = "block";
    }, 700);
    setTimeout(() => {
      home_design.style.display = "block";
      setTimeout(() => {
        home_design.style.opacity = "1";
        header_design.style.display = "none";
      }, 200);
    }, 600);
  };


  ss_logo.onclick = function () {
    page_state = "home";
    home_design.style.opacity = "0";
    home_header_text.style.display = "block";
    home_writing.style.opacity = "0";
    setTimeout(() => {
      home_design.style.display = "none";
      header_design.style.display = "block";

      home_writing.style.display = "none";
      header_writing.style.display = "block";

      header_body.style.left = "0";
      header_body.style.opacity = "1";
      setTimeout(() => {
        home_header_text.style.opacity = "1";
        home_header_text.style.top = "-40px";
      }, 1300)
    }, 500);
  };

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

  if (footer_portal) {
    footer_portal.onclick = function () {
      footer_portal.style.animation = "spin 10s cubic-bezier(0.11,0,0.82,0.73), spin 8s linear 10s infinite";
      footer_portal.style.top = "-60vh";
      footer_expand_portal.style.height = "100vh";
      setTimeout(() => {
        footer_expand_content.style.display = 'block';
        footer_expand_content.style.opacity = "1";
      }, 1000)
    };
  }


  window.onresize = function () {
    const width = window.innerWidth;
    if (page_state === "writing" && width > 800) {
      header_body.style.opacity = "1";
      header_body.style.left = "-35vw";
    } else if (page_state === "writing" && width <= 800) {
      header_body.style.opacity = "0";
      header_body.style.left = "0";
    }
    if (page_state === "design" && width > 800) {
      header_body.style.opacity = "1";
      header_body.style.left = "35vw";
    } else if (page_state === "design" && width <= 800) {
      header_body.style.opacity = "0";
      header_body.style.left = "0";
    }
  };
};