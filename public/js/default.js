window.onload = function () {
  const config = {
    sunEmoji: "⛅",
    moonEmoji: "🌑"
  };
  const header_switch_background = document.getElementById("header-switch-background");
  const ss_logo = document.getElementById("ss-logo");
  const current_hours = new Date().getHours();
  let dark_mode = localStorage.getItem("dark_mode") === "true";

  if (dark_mode) {
    toggleBackground(false);
  }

  if ((current_hours >= 18 || current_hours <= 5) && dark_mode === false) {
    const temp_dom = document.getElementById("header-background-instruction");
    temp_dom.style.display = "block";
    setTimeout(() => {
      temp_dom.style.opacity = "1";
    }, 1000);
    setTimeout(() => {
      temp_dom.style.opacity = "0";
      setTimeout(() => {
        temp_dom.style.display = "none";
      }, 1000)
    }, 4000);
  }

  window.onscroll = function () {
    scroll()
  };

  function scroll() {
    const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolled = (winScroll / height);
    document.getElementById("loader").style.strokeDashoffset = (300 - parseInt(260 * scrolled)).toString();
  }

  function changeBackgroundTo(color) {

    const htmlElement = document.getElementsByTagName("html")[0];
    for (const element of document.getElementsByTagName("a")) {
      element.style.color = color;
    }

    htmlElement.style.color = color;
    if (color === "white") {
      htmlElement.style.scrollbarColor = "white rgba(0, 0, 0, 0)";

    } else {
      htmlElement.style.scrollbarColor = "black rgba(0, 0, 0, 0)";
    }

  }

  function toggleBackground(toggle=true) {
    if (toggle) {
      dark_mode = !dark_mode;
      localStorage.setItem("dark_mode", dark_mode.toString());
    }
    if (dark_mode) {
      changeBackgroundTo("white");
      header_switch_background.innerHTML = config.sunEmoji;
      ss_logo.src = "/img/shashank-white.png";
      for (const element of document.getElementsByTagName("blockquote")) {
        element.style.color = "white";
      }

      for (const element of document.getElementsByTagName("code")) {
        element.style.backgroundColor = "#383333";
      }

      for (const element of document.getElementsByClassName("message")) {
        element.style.backgroundColor = "#383333";
        element.style.color = "white";
      }

      for (const element of document.getElementsByTagName("pre")) {
        element.style.backgroundColor = "#383333";
      }


      document.getElementsByClassName("post-title")[0].style.color = "white";
      document.querySelector("body").style.backgroundColor = "black";
      document.getElementsByClassName("anicircle")[0].style.stroke = "white";
    } else {
      changeBackgroundTo("#161f38");
      header_switch_background.innerHTML = config.moonEmoji;
      ss_logo.src = "/img/shashank.png";

      for (const element of document.getElementsByTagName("blockquote")) {
        element.style.color = "#7a7a7a";
      }

      for (const element of document.getElementsByTagName("code")) {
        element.style.backgroundColor = "#f9f9f9";
      }

      for (const element of document.getElementsByClassName("message")) {
        element.style.backgroundColor = "#f9f9f9";
        element.style.color = "#717171";
      }

      for (const element of document.getElementsByTagName("pre")) {
        element.style.backgroundColor = "#f9f9f9";
      }

      document.getElementsByClassName("post-title")[0].style.color = "black";

      document.querySelector("body").style.backgroundColor = "white";
      document.getElementsByClassName("anicircle")[0].style.stroke = "black";
    }
  }

  header_switch_background.onclick = function() {
    toggleBackground();
  };
};