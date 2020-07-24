window.onload = function () {
  const config = {
    header: {
      "default": "I'm Shashank Sharma, just a guy who loves coding, designing and anime.",
      "anime": "I love watching/reading anime, manga, manhua and manhwa.",
      "moon": "In my name, Shashank is also referred as Moon"
    }
  };
  const main_content = document.getElementById("main-content");
  const footer_portal = document.getElementById("footer-portal");
  const footer_expand_portal = document.getElementById("footer-expand-portal");
  const footer_expand_content = document.getElementById("footer-expand-content");
  const loadingPage = document.getElementById("loading-page");
  const header_writing = document.getElementById("header-writing");
  const header_design = document.getElementById("header-design");
  const header_hello = document.getElementById("header-hello");
  const home_writing = document.getElementById("home-writing");
  const home_design = document.getElementById("home-design");
  const home_hello = document.getElementById("home-hello");
  const header_body = document.getElementById("home-header");
  const ss_logo = document.getElementById("ss-logo");
  const home_header_text = document.getElementById("home-header-text");
  const home_header_portal = document.getElementById("home-header-portal");
  const loader = document.getElementById("loader");

  const pointer_anime = document.getElementById("pointer-anime");
  const pointer_moon = document.getElementById("pointer-moon");
  // const open_timer = document.getElementById("open-timer");
  // let open_timer_func = null;
  let header_timer_func = null;
  let page_state = "home";
  let header_state = "default";

  const height = window.innerHeight;
  const width = window.innerWidth;
  loadingPage.style.setProperty("--width", width);
  loadingPage.style.setProperty("--height", height);

  loadingPage.classList.add("collapse");

  setTimeout(() => {
    loadingPage.style.zIndex = "0";
  }, 1000 );

  home_header_portal.style.marginTop = "30vmin";
  home_header_portal.style.transform = "rotate3d(1, 0, 0, 65deg)";

  setTimeout(() => {
    home_header_text.style.opacity = "1";
    home_header_text.style.top = "-40px";
  }, 1300);

  header_writing.onclick = function () {
    page_state = "writing";
    pointer_anime.style.display = "none";
    pointer_moon.style.display = "none";
    if (width <= 800) {
      header_body.style.opacity = "0";
    } else {
      header_body.style.left = "-35vw";
    }
    home_design.style.opacity = "0";
    home_hello.style.opacity = "0";
    home_header_text.style.opacity = "0";
    home_header_text.style.top = "0";
    setTimeout(() => {
      home_design.style.display = "none";
      home_hello.style.display = "none";
      home_header_text.style.display = "none";
      header_design.style.display = "block";
      header_hello.style.display = "block";
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
    pointer_anime.style.display = "none";
    pointer_moon.style.display = "none";
    if (width <= 800) {
      header_body.style.opacity = "0";
    } else {
      header_body.style.left = "35vw";
    }
    home_writing.style.opacity = "0";
    home_hello.style.opacity = "0";
    home_header_text.style.opacity = "0";
    home_header_text.style.top = "0";
    setTimeout(() => {
      home_header_text.style.display = "none";
      home_writing.style.display = "none";
      home_hello.style.display = "none";
      header_writing.style.display = "block";
      header_hello.style.display = "block";
    }, 700);
    setTimeout(() => {
      home_design.style.display = "block";
      setTimeout(() => {
        home_design.style.opacity = "1";
        header_design.style.display = "none";
      }, 200);
    }, 600);
  };

  header_hello.onclick = function () {
    page_state = "hello";
    pointer_anime.style.display = "none";
    pointer_moon.style.display = "none";
    if (width <= 800) {
      header_body.style.opacity = "0";
    } else {
      header_body.style.left = "-35vw";
    }
    home_writing.style.opacity = "0";
    home_design.style.opacity = "0";
    home_header_text.style.opacity = "0";
    home_header_text.style.top = "0";
    setTimeout(() => {
      home_header_text.style.display = "none";
      home_writing.style.display = "none";
      home_design.style.display = "none";
      header_writing.style.display = "block";
      header_hello.style.display = "block";
    }, 700);
    setTimeout(() => {
      home_hello.style.display = "block";
      setTimeout(() => {
        home_hello.style.opacity = "1";
        header_hello.style.display = "none";
      }, 200);
    }, 600);
  };


  ss_logo.onclick = function () {
    page_state = "home";
    home_design.style.opacity = "0";
    home_hello.style.opacity = "0";
    home_writing.style.opacity = "0";
    home_header_text.style.display = "block";
    setTimeout(() => {
      home_design.style.display = "none";
      header_design.style.display = "block";

      home_writing.style.display = "none";
      header_writing.style.display = "block";

      home_hello.style.display = "none";
      header_hello.style.display = "block";

      header_body.style.left = "0";
      header_body.style.opacity = "1";
      setTimeout(() => {
        home_header_text.style.opacity = "1";
        home_header_text.style.top = "-40px";
        pointer_anime.style.display = "block";
        pointer_moon.style.display = "block";
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
    if (page_state === "hello" && width > 800) {
      header_body.style.opacity = "1";
      header_body.style.left = "-35vw";
    } else if (page_state === "hello" && width <= 800) {
      header_body.style.opacity = "0";
      header_body.style.left = "0";
    }
  };

  function changeHeaderText(type) {
    home_header_text.style.opacity = "0";
    home_header_text.style.top = "0";
    setTimeout(() => {
      home_header_text.innerHTML = config.header[type];
      home_header_text.style.opacity = "1";
      home_header_text.style.top = "-40px";
    }, 600);
  }

  // TODO: On any other button click, reset things to default for header text only

  pointer_anime.onmouseover = function () {
    clearTimeout(header_timer_func);
    if (header_state !== "anime") {
      header_state = "anime";
      changeHeaderText("anime")
    }
  };

  pointer_moon.onmouseover = function () {
    clearTimeout(header_timer_func);
    if (header_state !== "moon") {
      header_state = "moon";
      changeHeaderText("moon");
    }
  };

  pointer_anime.onmouseout = function () {
    header_timer_func = setTimeout(() => {
      header_state = "default";
      changeHeaderText("default");
    }, 3000);
  };

  pointer_moon.onmouseout = function () {
    header_timer_func = setTimeout(() => {
      header_state = "default";
      changeHeaderText("default");
    }, 3000);
  };

  // open_timer.onmouseover = function () {
  //   loader.style.strokeDashoffset = "0";
  //   open_timer_func = setTimeout(() => {
  //     window.open(this.href);
  //   }, 2000);
  // };
  //
  // open_timer.onmouseout = function () {
  //   clearTimeout(open_timer_func);
  //   loader.style.transition = "stroke-dashoffset 400ms linear";
  //   loader.style.strokeDashoffset = "300";
  //   setTimeout(() => {
  //     loader.style.transition = "stroke-dashoffset 2000ms linear";
  //   }, 400)
  // }
};