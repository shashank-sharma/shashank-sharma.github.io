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
  const header_timeline = document.getElementById("header-timeline");
  const header_sideways = document.getElementById("header-sideways");
  const home_writing = document.getElementById("home-writing");
  const home_design = document.getElementById("home-design");
  const home_hello = document.getElementById("home-hello");
  const header_body = document.getElementById("home-header");
  const ss_logo = document.getElementById("ss-logo");
  const home_header_text = document.getElementById("home-header-text");
  const home_header_portal = document.getElementById("home-header-portal");
  const home_timeline = document.getElementById("home-timeline");
  const home_timeline_close = document.getElementById("home-timeline-close");
  const home_header_vector_body = document.getElementById("home-header-vector-body");
  const loader = document.getElementById("loader");

  const pointer_anime = document.getElementById("pointer-anime");
  const pointer_moon = document.getElementById("pointer-moon");
  // const open_timer = document.getElementById("open-timer");
  // let open_timer_func = null;
  let header_timer_func = null;
  let timeline = null;
  let page_state = "home";
  let header_state = "default";

  const container = document.getElementById("visualization");
  const internship_indicator = document.getElementById("internship-indicator");
  const hackathon_indicator = document.getElementById("hackathon-indicator");
  const certification_indicator = document.getElementById("certification-indicator");
  const volunteer_indicator = document.getElementById("volunteer-indicator");
  const project_indicator = document.getElementById("project-indicator");

  let timeline_hide = {};


  // Create a DataSet (allows two way data-binding)
  const items = new vis.DataSet([
    {
      id: "I",
      content: "First Year",
      start: "2016-05-09",
      end: "2017-05-01",
      type: "background",
      className: "first-year",
    },
    {
      id: "II",
      content: "Second Year",
      start: "2017-05-01",
      end: "2018-05-01",
      type: "background",
      className: "second-year",
    },
    {
      id: "III",
      content: "Third Year",
      start: "2018-05-01",
      end: "2019-05-01",
      type: "background",
      className: "third-year",
    },
    {
      id: "IV",
      content: "Fourth Year",
      start: "2019-05-01",
      end: new Date(),
      type: "background",
      className: "fourth-year",
    },
    {
      id: "school-11-background",
      content: "11th Standard",
      start: "2014-05-01",
      end: "2015-05-01",
      type: "background",
      className: "eleven-standard",
    },
    {
      id: "school-12-background",
      content: "12th Standard",
      start: "2015-05-01",
      end: "2016-05-09",
      type: "background",
      className: "twelve-standard",
    },
    {
      id: "school-1",
      content: '<span style="font-weight:600;">Mar 24</span><br/>Codechef | Started',
      start: "2015-03-24", className: "project no-end"
    },
    {
      id: "Google-code-in",
      content: '<span style="font-weight:600;">Dec 12</span><br/>Google Code-in 2015',
      start: "2015-12-12", end: "2016-03-01", className: "volunteer timeline-stripes"
    },
    {
      id: 0,
      content: '<span style="font-weight:600;">May 09</span><br/>College started',
      start: "2016-05-09",
      className: "event no-end"
    },
    {
      id: "competitive-codechef-start",
      content: '<span style="font-weight:600;">Aug 12</span><br/>Codechef | competitive coding',
      start: "2016-08-12",
      end: "2016-12-31",
      className: "project timeline-stripes"
    },
    {
      id: "competitive-hackerearth-start",
      content: '<span style="font-weight:600;">Oct 01</span><br/>Hackerearth',
      start: "2016-10-01",
      end: "2017-10-10",
      className: "project timeline-stripes"
    },
    // Aug 3, 2017
    {
      id: "internship-1",
      content: '<span style="font-weight:600;">Aug 03</span><br/>Newrubric',
      start: "2017-08-03",
      end: "2018-03-12",
      className: "internship timeline-stripes"
    },
    {
      id: "internship-2",
      content: '<span style="font-weight:600;">Nov 20</span><br/>Teknuance',
      start: "2017-11-20",
      end: "2018-05-08",
      className: "internship timeline-stripes"
    },
    {
      id: "internship-3",
      content: '<span style="font-weight:600;">Feb 02</span><br/>AudienceSutra',
      start: "2018-02-06",
      end: "2018-08-15",
      className: "internship timeline-stripes"
    },
    {
      id: "internship-4",
      content: '<span style="font-weight:600;">Jun 07</span><br/>YourDOST',
      start: "2018-06-07",
      end: "2018-09-25",
      className: "internship timeline-stripes"
    },
    {
      id: "internship-5",
      content: '<span style="font-weight:600;">Sep 03</span><br/>AbsoluteFace',
      start: "2018-09-03",
      end: "2018-11-01",
      className: "internship timeline-stripes"
    },
    {
      id: "internship-6",
      content: '<span style="font-weight:600;">Oct 23</span><br/>Omoads',
      start: "2018-10-23",
      end: "2018-12-22",
      className: "internship timeline-stripes"
    },
    {
      id: "internship-7",
      content: '<span style="font-weight:600;">May 05</span><br/>Axcelorate Labs pvt ltd',
      start: "2019-05-05",
      end: "2019-12-02",
      className: "internship timeline-stripes"
    },
    {
      id: "internship-8",
      content: '<span style="font-weight:600;">Dec 09</span><br/>Atlan',
      start: "2019-12-09",
      end: "2020-06-20",
      className: "internship timeline-stripes"
    },
    {
      id: "certification-0",
      content: '<span style="font-weight:600;">Jan 11</span><br/>NPTEL: Introduction to Python',
      start: "2017-01-11",
      end: "2017-6-15",
      className: "certification timeline-stripes"
    },
    {
      id: "certification-1",
      content: '<span style="font-weight:600;">Sep 01</span><br/>CS50: Harvard University',
      start: "2017-09-01",
      end: "2018-01-10",
      className: "certification timeline-stripes"
    },
    {
      id: "certification-2",
      content: '<span style="font-weight:600;">Feb 01</span><br/>Udacity: Google India Challenge Scholarship',
      start: "2018-02-01",
      className: "certification no-end"
    },
    {
      id: "certification-3",
      content: '<span style="font-weight:600;">Aug 14</span><br/>Infosys Certified',
      start: "2019-08-14",
      className: "certification no-end"
    },
    {
      id: "volunteer-1",
      content: '<span style="font-weight:600;">May 01</span><br/>College: Technical Club',
      start: "2018-05-01",
      className: "volunteer no-end"
    },
    {
      id: "volunteer-2",
      content: '<span style="font-weight:600;">Aug 01</span><br/>DSC: Project Lead',
      start: "2019-08-01",
      end: "2020-06-01",
      className: "volunteer timeline-stripes"
    },
    {
      id: "volunteer-3",
      content: '<span style="font-weight:600;">Aug 14</span><br/>DjangoGirls: Mentor',
      start: "2019-08-14",
      className: "volunteer no-end"
    },
    {
      id: "volunteer-4",
      content: '<span style="font-weight:600;">Feb 22</span><br/>Isohack: Hackathon organized',
      start: "2020-02-22",
      className: "volunteer no-end"
    },
    {
      id: "volunteer-5",
      content: '<span style="font-weight:600;">Nov 01</span><br/>DjangoGirls: Co-organizer',
      start: "2019-11-01",
      className: "volunteer no-end"
    },
    {
      id: "volunteer-6",
      content: '<span style="font-weight:600;">Feb 01</span><br/>GirlScript Summer of Code',
      start: "2020-02-01",
      end: "2020-06-01",
      className: "volunteer timeline-stripes"
    },
    {
      id: "hackathon-1",
      content: '<span style="font-weight:600;">Mar 28</span><br/>Smart India Hackathon 2018',
      start: "2018-03-28",
      className: "hackathon no-end"
    },
    {
      id: "hackathon-2",
      content: '<span style="font-weight:600;">Sep 29</span><br/>NITI: Pune Hackathon',
      start: "2018-09-29",
      className: "hackathon no-end"
    },
    {
      id: "hackathon-3",
      content: '<span style="font-weight:600;">Oct 30</span><br/>HackAcro | Winner',
      start: "2018-10-30",
      className: "hackathon no-end"
    },
    {
      id: "hackathon-4",
      content: '<span style="font-weight:600;">Apr 05</span><br/>Void Hacks, Indore',
      start: "2019-04-05",
      className: "hackathon no-end"
    },
    {
      id: "hackathon-5",
      content: '<span style="font-weight:600;">Aug 26</span><br/>College: Winner, Project Exhibition',
      start: "2019-8-26",
      className: "hackathon no-end"
    },
    {
      id: "hackathon-6",
      content: '<span style="font-weight:600;">Oct 04</span><br/>HackIndore 2.0',
      start: "2019-10-04",
      className: "hackathon no-end"
    },
    {
      id: "hackathon-7",
      content: '<span style="font-weight:600;">Oct 11</span><br/>Version Beta 2.0, Bhopal',
      start: "2019-10-11",
      className: "hackathon no-end"
    },
    {
      id: "project-1",
      content: '<span style="font-weight:600;">Jan 02</span><br/>#100DaysOfCode',
      start: "2017-01-02",
      className: "volunteer no-end"
    },
  ]);

  // Configuration for the Timeline
  const options = {
    stack: true,
    horizontalScroll: true,
    zoomKey: "ctrlKey",
    width: "100%",
    height: "100vh",
    start: new Date("January 01, 2015"),
    end: new Date("May 21, 2018"),
    editable: false
  };

  function reveal_cards(type, toggle = true) {
    const card_list = document.getElementsByClassName(type);
    const indicator = document.getElementById(type + "-indicator");
    const includeStatus = timeline_hide[type] || false;
    let toggleStatus = false;

    if (toggle) {
      if (includeStatus) {
        timeline_hide[type] = false;
      } else if (!includeStatus) {
        toggleStatus = true;
        timeline_hide[type] = true;
      }
    } else if (includeStatus) {
      toggleStatus = true;
    }

    for (let card of card_list) {
      if (toggleStatus) {
        indicator.style.textDecoration = "line-through";
        card.style.opacity = "0";
        setTimeout(() => {
          card.style.display = "none";
        }, 1000)
      } else {
        indicator.style.textDecoration = "none";

        card.style.display = "block";
        setTimeout(() => {
          card.style.opacity = "1";
        }, 100);
      }
    }
  }

  function timelineOnChange() {
    timeline.on("rangechanged", function ({start, end}) {
      console.log(timeline_hide);
      // console.log(start.toString(), end.toString());
      for (let type of Object.keys(timeline_hide)) {
        reveal_cards(type, false);
      }
    });
  }

  internship_indicator.onclick = function () {
    reveal_cards("internship");
  };

  hackathon_indicator.onclick = function () {
    reveal_cards("hackathon");
  };

  volunteer_indicator.onclick = function () {
    reveal_cards("volunteer");
  };

  certification_indicator.onclick = function () {
    reveal_cards("certification");
  };

  project_indicator.onclick = function () {
    reveal_cards("project");
  };

  home_timeline_close.onclick = function () {
    home_timeline.style.opacity = "0";
    setTimeout(() => {
      home_timeline.style.display = "none";
      main_content.style.opacity = "1";
    }, 1100);
  };

  const height = window.innerHeight;
  const width = window.innerWidth;
  loadingPage.style.setProperty("--width", width);
  loadingPage.style.setProperty("--height", height);

  loadingPage.classList.add("collapse");

  setTimeout(() => {
    home_header_vector_body.style.top = "0";
    home_header_vector_body.style.opacity = "1";
  }, 1000);

  setTimeout(() => {
    loadingPage.style.zIndex = "0";
    home_header_portal.style.zIndex = "0";
  }, 1000);

  home_header_portal.style.marginTop = "27vmin";
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
    header_sideways.style.right = "-58px";
    home_design.style.opacity = "0";
    home_hello.style.opacity = "0";
    home_header_text.style.opacity = "0";
    home_header_text.style.top = "0";
    header_sideways.style.opacity = "0";
    setTimeout(() => {
      home_design.style.display = "none";
      home_hello.style.display = "none";
      home_header_text.style.display = "none";
      header_sideways.style.display = "none";
      header_design.style.display = "block";
      header_hello.style.display = "block";
    }, 900);
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
    header_sideways.style.right = "-58px";
    home_writing.style.opacity = "0";
    home_hello.style.opacity = "0";
    home_header_text.style.opacity = "0";
    home_header_text.style.top = "0";
    header_sideways.style.opacity = "0";
    setTimeout(() => {
      home_header_text.style.display = "none";
      home_writing.style.display = "none";
      home_hello.style.display = "none";
      header_sideways.style.display = "none";
      header_writing.style.display = "block";
      header_hello.style.display = "block";
    }, 900);
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
    header_sideways.style.right = "-58px";
    home_writing.style.opacity = "0";
    home_design.style.opacity = "0";
    home_header_text.style.opacity = "0";
    home_header_text.style.top = "0";
    header_sideways.style.opacity = "0";
    setTimeout(() => {
      home_header_text.style.display = "none";
      home_writing.style.display = "none";
      home_design.style.display = "none";
      header_sideways.style.display = "none";
      header_writing.style.display = "block";
      header_hello.style.display = "block";
    }, 900);
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
    header_sideways.style.display = "block";

    header_body.style.left = "0";
    setTimeout(() => {
      home_design.style.display = "none";
      header_design.style.display = "block";

      home_writing.style.display = "none";
      header_writing.style.display = "block";

      home_hello.style.display = "none";
      header_hello.style.display = "block";
      header_body.style.opacity = "1";
      setTimeout(() => {
        home_header_text.style.opacity = "1";
        header_sideways.style.opacity = "1";
        header_sideways.style.right = "-43px";
        home_header_text.style.top = "-40px";
        pointer_anime.style.display = "block";
        pointer_moon.style.display = "block";
      }, 800)
    }, 900);
  };

  header_timeline.onclick = function () {
    main_content.style.opacity = "0";
    setTimeout(() => {
      home_timeline.style.display = "block";
      setTimeout(() => {
        home_timeline.style.opacity = "1";
      }, 100);
      if (home_timeline.style.opacity === "") {
        console.log("Creating timeline");
        timeline = new vis.Timeline(container, items, options);
        timelineOnChange();
      }
    }, 1100)
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