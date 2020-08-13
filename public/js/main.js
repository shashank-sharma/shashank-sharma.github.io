window.onload = function () {
  const config = {
    header: {
      "default": "I'm Shashank Sharma, just a guy who loves coding, designing and anime.",
      "anime": "I love watching/reading anime, manga, manhua and manhwa.",
      "moon": "In my name, Shashank is also referred as Moon"
    },
    month: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
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
  const home_header_vector_background = document.getElementById("home-header-vector-background");
  const timeline_indicator_button = document.getElementById("timeline-indicator-button");
  const timeline_indicator_icon = document.getElementById("timeline-indicator-icon");
  const timeline_presentation = document.getElementById("timeline-presentation");
  const timeline_indicator = document.getElementById("timeline-indicator");
  const timeline_forward_button = document.getElementById("timeline-forward-button");
  const timeline_presentation_title = document.getElementById("timeline-presentation-title");
  const timeline_presentation_duration = document.getElementById("timeline-presentation-duration");
  const timeline_presentation_text = document.getElementById("timeline-presentation-text");
  const timeline_presentation_image = document.getElementById("timeline-presentation-image");
  const timeline_presentation_image_container = document.getElementById("timeline-presentation-image-container");
  const timeline_presentation_caption = document.getElementById("timeline-presentation-caption");
  const timeline_play_instruction = document.getElementById("timeline-play-instruction");
  const timeline_instruction_button = document.getElementById("timeline-instruction-button");
  const timeline_notice = document.getElementById("timeline-notice");
  const loader = document.getElementById("loader");

  const pointer_anime = document.getElementById("pointer-anime");
  const pointer_moon = document.getElementById("pointer-moon");
  // const open_timer = document.getElementById("open-timer");
  // let open_timer_func = null;
  let pageValue = getParameterByName('page');
  let timeline_indicator_counter = -1;
  let timeline_indicator_status = false;
  let timeline_indicator_started = false;
  let timeline_instruction_status = false;
  let is_timeline_created = false;
  var timeline_indicator_pointer = null;
  let header_timer_func = null;
  let timeline = null;
  let is_homepage = false;
  let page_state = "home";
  let header_state = "default";

  const timeline_container = document.getElementById("visualization");
  const internship_indicator = document.getElementById("internship-indicator");
  const hackathon_indicator = document.getElementById("hackathon-indicator");
  const certification_indicator = document.getElementById("certification-indicator");
  const volunteer_indicator = document.getElementById("volunteer-indicator");
  const project_indicator = document.getElementById("project-indicator");

  let timeline_hide = {};

  const height = window.innerHeight;
  const width = window.innerWidth;
  loadingPage.style.setProperty("--width", width);
  loadingPage.style.setProperty("--height", height);
  loadingPage.classList.add("collapse");

  // Create a DataSet (allows two way data-binding)
  const timeline_list = [
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
      start: "2015-03-24", className: "project no-end",
      text: "The day when I first started competitive coding",
      image: "/img/timeline/codechef-school.png",
      caption: "- Frustrated guy trying to pass checks :'c"
    },
    {
      id: "Google-code-in",
      content: '<span style="font-weight:600;">Dec 12</span><br/>Google Code-in 2015',
      start: "2015-12-12", end: "2016-03-01", className: "volunteer timeline-stripes",
      text: "During GCI, I solved 40 tasks and contributed to Ubuntu, FOSSASIA and other organizations",
      image: "/img/timeline/google-code-in-shashank.jpg",
      caption: "- Participation certificate for GCI"
    },
    {
      id: 0,
      content: '<span style="font-weight:600;">May 09</span><br/>College started',
      start: "2016-05-09",
      className: "event no-end",
      text: "I officially joined Acropolis Technical Campus (2016-2020) as CSE",
      image: "/img/timeline/college.jpeg",
      caption: "- College which I was part of"
    },
    {
      id: "competitive-codechef-start",
      content: '<span style="font-weight:600;">Aug 12</span><br/>Codechef | competitive coding',
      start: "2016-08-12",
      end: "2016-12-31",
      className: "project timeline-stripes",
      text: "I used to solve codechef questions just for the sake of understanding Python 2.7"
    },
    {
      id: "competitive-hackerearth-start",
      content: '<span style="font-weight:600;">Oct 01</span><br/>Hackerearth',
      start: "2016-10-01",
      end: "2017-10-10",
      className: "project timeline-stripes",
      text: "I liked structured problems and started my journey ahead with Hackerearth"
    },
    // Aug 3, 2017
    {
      id: "internship-1",
      content: '<span style="font-weight:600;">Aug 03</span><br/>Newrubric',
      start: "2017-08-03",
      end: "2018-03-12",
      className: "internship timeline-stripes",
      text: "My first Internship where I got exposed to learn about frontend and backend technologies, working with PDF and interacting with other technologies",
      image: "/img/timeline/internship-1.png",
      caption: "- Company logo"
    },
    {
      id: "internship-2",
      content: '<span style="font-weight:600;">Nov 20</span><br/>Teknuance',
      start: "2017-11-20",
      end: "2018-05-08",
      className: "internship timeline-stripes",
      text: "During that time, I was on fire and doing 2 internships at a same time and I got to learn a lot here for my favourate language which was Python.\n" +
      "Also this is where I got my chance to make use of newly developed skill Django and understood APIs, CRON Jobs using celery, Google APIs usage and ML models",
      image: "/img/timeline/internship-2.png",
      caption: "- Company logo"
    },
    {
      id: "internship-3",
      content: '<span style="font-weight:600;">Feb 02</span><br/>AudienceSutra',
      start: "2018-02-06",
      end: "2018-08-15",
      className: "internship timeline-stripes",
      text: "Yes, still on fire and doing 2 internships at a same time, that's why timeline is colliding with previous one.\n" +
      "Here I got to actually work with Django using Django REST Framework and creating APIs with totally new challenges"
    },
    {
      id: "internship-4",
      content: '<span style="font-weight:600;">Jun 07</span><br/>YourDOST',
      start: "2018-06-07",
      end: "2018-09-25",
      className: "internship timeline-stripes",
      text: "Still on fire, doing 2 internships but this time I got to experience on-office work at Bangalore and most importantly, polishing my skills as a Fullstack Developer",
      image: "/img/timeline/internship-4.png",
      caption: "- Company logo"
    },
    {
      id: "internship-5",
      content: '<span style="font-weight:600;">Sep 03</span><br/>AbsoluteFace',
      start: "2018-09-03",
      end: "2018-11-01",
      className: "internship timeline-stripes",
      text: "And finally, I was doing 1 internship at a time and to be honest I was rusty during this time period, hence I started working on my personal development.\n" +
      "During this internship, I got to work with latest problems faced by industries and integrating it in production"
    },
    {
      id: "internship-6",
      content: '<span style="font-weight:600;">Oct 23</span><br/>Omoads',
      start: "2018-10-23",
      end: "2018-12-22",
      className: "internship timeline-stripes",
      text: "I joined this company to get experience working with 360 VR Technologies in advertisement sector with Django and other technologies which was fun working with it",
      image: "/img/timeline/internship-6.png",
      caption: "- Company logo"
    },
    {
      id: "internship-7",
      content: '<span style="font-weight:600;">May 05</span><br/>Axcelorate Labs pvt ltd',
      start: "2019-05-05",
      end: "2019-12-02",
      className: "internship timeline-stripes",
      text: "This internship was eye opener in my case and it literally connected all the dots which were floating in my brain and created one huge picture.\n" +
      "I got to learn about Microservices, APIs, Docker, Orchestrating with Kubernetes, Testing, Transaction and Optimization"
    },
    {
      id: "internship-8",
      content: '<span style="font-weight:600;">Dec 09</span><br/>Atlan',
      start: "2019-12-09",
      end: "2020-06-20",
      className: "internship timeline-stripes",
      text: "My last internship, which literally introduced me to this whole new world of data where I got to work with ELT pipelines, Data Quality module, Data Governance, Authentication and Authorization layer of it",
      image: "/img/timeline/internship-8.jpg",
      caption: "- Company logo / poster"
    },
    {
      id: "job-1",
      content: '<span style="font-weight:600;">Jul 27</span><br/>CivicDataLab',
      start: "2020-07-27",
      end: new Date(),
      className: "internship timeline-stripes",
      text: "My first job as Backend Developer",
      image: "/img/timeline/cdl.jpg",
      caption: "- Company logo"
    },
    {
      id: "certification-0",
      content: '<span style="font-weight:600;">Jan 11</span><br/>NPTEL: Introduction to Python',
      start: "2017-01-11",
      end: "2017-6-15",
      className: "certification timeline-stripes",
      text: "My first certification which I was a part of just to test my knowledge and understanding remaining concepts"
    },
    {
      id: "certification-1",
      content: '<span style="font-weight:600;">Sep 01</span><br/>CS50: Harvard University',
      start: "2017-09-01",
      end: "2018-01-10",
      className: "certification timeline-stripes",
      text: "Just to be a part of community and to make my fundamentals quite strong, that's why I did this certification"
    },
    {
      id: "certification-2",
      content: '<span style="font-weight:600;">Feb 01</span><br/>Udacity: Google India Challenge Scholarship',
      start: "2018-02-01",
      className: "certification no-end",
      text: "I got scholarship from Udacity for this course and being a part of wonderful community"
    },
    {
      id: "certification-3",
      content: '<span style="font-weight:600;">Aug 14</span><br/>Infosys Certified',
      start: "2019-08-14",
      className: "certification no-end",
      text: "It was just a certification by Infosys with 2 competitive questions and 20 mcq which I did it in under 20min over 3 hours time slot and got 80%"
    },
    {
      id: "volunteer-1",
      content: '<span style="font-weight:600;">May 01</span><br/>College: Technical Club',
      start: "2018-05-01",
      className: "volunteer no-end",
      text: "I really wanted to start Technical club in our college in hope for having one strong community"
    },
    {
      id: "volunteer-2",
      content: '<span style="font-weight:600;">Aug 01</span><br/>DSC: Project Lead',
      start: "2019-08-01",
      end: "2020-06-01",
      className: "volunteer timeline-stripes",
      text: "I was Project lead for our DSC Community in college and responsible for creating websites, seminars and knowledge sharing sessions"
    },
    {
      id: "volunteer-3",
      content: '<span style="font-weight:600;">Aug 14</span><br/>DjangoGirls: Mentor',
      start: "2019-08-14",
      className: "volunteer no-end",
      text: "I was been a part of DjangoGirls Indore and I played as a part of Mentor + Designing Posters",
      image: "/img/timeline/djangogirls-indore-poster.jpg",
      caption: "- DjangoGirls Indore Poster"
    },
    {
      id: "volunteer-4",
      content: '<span style="font-weight:600;">Feb 22</span><br/>Isohack: Hackathon organized',
      start: "2020-02-22",
      className: "volunteer no-end",
      text: "It was my dream to organize Hackathon, later it became everyone dream to organize it and that's what we did :)",
      image: "/img/timeline/isohack.jpg",
      caption: "- Isohack Team, will miss that"
    },
    {
      id: "volunteer-5",
      content: '<span style="font-weight:600;">Nov 01</span><br/>DjangoGirls: Co-organizer',
      start: "2019-11-01",
      className: "volunteer no-end",
      text: "Later on, I got the opportunity to be a Co-Organizer which was crazy :P"
    },
    {
      id: "volunteer-6",
      content: '<span style="font-weight:600;">Feb 01</span><br/>GirlScript Summer of Code',
      start: "2020-02-01",
      end: "2020-06-01",
      className: "volunteer timeline-stripes",
      text: "Here, I participated as a Mentor to actually help Open source community from my end through Gssoc"
    },
    {
      id: "hackathon-1",
      content: '<span style="font-weight:600;">Mar 28</span><br/>Smart India Hackathon 2018',
      start: "2018-03-28",
      className: "hackathon no-end",
      text: "This was my very First Hackathon (I was in Second Year) and being a Team Lead we went to Grand Finale and came in Top 10",
      image: "/img/timeline/sih-2018.jpg",
      caption: "- During that time, I had 101 fever and survived with paracetamol, crazy times"
    },
    {
      id: "hackathon-2",
      content: '<span style="font-weight:600;">Sep 29</span><br/>NITI: Pune Hackathon',
      start: "2018-09-29",
      className: "hackathon no-end",
      text: "Our second hackathon and being a Team leader we again got to the Finals after multiple rounds but didn't won :c",
      image: "/img/timeline/niti-hackathon.jpg",
      caption: "- Group photo, nothing much to add"
    },
    {
      id: "hackathon-3",
      content: '<span style="font-weight:600;">Oct 30</span><br/>HackAcro | Winner',
      start: "2018-10-30",
      className: "hackathon no-end",
      text: "Competitive coding competition with 5 questions and on fixed time we secured first position",
    },
    {
      id: "hackathon-4",
      content: '<span style="font-weight:600;">Apr 05</span><br/>Void Hacks, Indore',
      start: "2019-04-05",
      className: "hackathon no-end",
      text: "Third hackathon, but this time only 2 of them were there and that too working with Blockchain which we had no idea of, crazy times but worth it",
      image: "/img/timeline/void-hacks.jpg",
      caption: "- Used to be status, but now it's in my website :P"
    },
    {
      id: "hackathon-5",
      content: '<span style="font-weight:600;">Aug 26</span><br/>College: Winner, Project Exhibition',
      start: "2019-8-26",
      className: "hackathon no-end",
      text: "College level project competition where we got first for our unique solution over Automated Feedback system",
      image: "/img/timeline/hackacro.jpg",
      caption: "- Had this, just working on my project and finalizing within 1 hour"
    },
    {
      id: "hackathon-6",
      content: '<span style="font-weight:600;">Oct 04</span><br/>HackIndore 2.0',
      start: "2019-10-04",
      className: "hackathon no-end",
      text: "My Fourth Hackathon where we again failed to win, maybe because there was no Machine Learning (that's what judges asked T-T)",
      image: "/img/timeline/hackindore.jpeg",
      caption: "- Random moment, but obviously we were discussing something"
    },
    {
      id: "hackathon-7",
      content: '<span style="font-weight:600;">Oct 11</span><br/>Version Beta 2.0, Bhopal',
      start: "2019-10-11",
      className: "hackathon no-end",
      text: "My Fifth and final Hackathon where we failed miserably because of unknown reasons, but trust me we enjoyed so much :)",
      image: "/img/timeline/version-beta.jpg",
      caption: "- Goodies before Hackathon started"
    },
    {
      id: "project-1",
      content: '<span style="font-weight:600;">Jan 02</span><br/>#100DaysOfCode',
      start: "2017-01-02",
      className: "volunteer no-end",
      text: "My first ever participated over FreeCodeCamp community and I officially started at the same time when it was declared in 2016 and started from Jan 2017. I was officially part of this :D",
      image: "/img/timeline/100daysofcode.png",
      caption: "- Contribution made (just because it's not all green doesn't mean I didn't code :P"
    },
  ];
  const timeline_items = new vis.DataSet(timeline_list);
  timeline_list.sort(function(a, b) {
    const keyA = new Date(a.start),
      keyB = new Date(b.start);
    // Compare the 2 dates
    if (keyA < keyB) return -1;
    if (keyA > keyB) return 1;
    return 0;
  });

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
    const instruction = document.getElementById(type + "-instruction");
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
        instruction.style.textDecoration = "line-through";
        card.style.opacity = "0";
        setTimeout(() => {
          card.style.display = "none";
        }, 1000)
      } else {
        indicator.style.textDecoration = "none";
        instruction.style.textDecoration = "none";
        card.style.display = "block";
        setTimeout(() => {
          card.style.opacity = "1";
        }, 100);
      }
    }
  }

  function getParameterByName(name, url) {
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, '\\$&');
    var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
      results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, ' '));
  }

  function timelineOnChange() {
    timeline.on("rangechanged", function ({start, end}) {
      // console.log(start.toString(), end.toString());
      for (let type of Object.keys(timeline_hide)) {
        reveal_cards(type, false);
      }
    });
  }

  function showHomepage() {
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
  }

  function showHomepageVector() {
    setTimeout(() => {
      home_header_vector_background.style.opacity = "1";
    }, 900);

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

  document.getElementById("internship-instruction").onclick = function () {
    reveal_cards("internship");
  };

  document.getElementById("hackathon-instruction").onclick = function () {
    reveal_cards("hackathon");
  };

  document.getElementById("volunteer-instruction").onclick = function () {
    reveal_cards("volunteer");
  };

  document.getElementById("certification-instruction").onclick = function () {
    reveal_cards("certification");
  };

  document.getElementById("project-instruction").onclick = function () {
    reveal_cards("project");
  };

  function closeTimeline() {
    home_timeline.style.opacity = "0";
    resetTimeline();
    setTimeout(() => {
      home_timeline.style.display = "none";
      main_content.style.opacity = "1";
      timeline_indicator_icon.classList.remove("fa-pause");
      timeline_indicator_icon.classList.add("fa-play");
      pauseTimelineInterval();
    }, 1100);
  }

  home_timeline_close.onclick = function () {
    closeTimeline();
  };

  if (pageValue === "designs" || pageValue === "writings"
  || pageValue === "timelime" || pageValue === "about") {
    window.history.pushState('page1', 'Home', '');
  }

  changeState(pageValue);

  window.onpopstate = () => {
    changeState(getParameterByName('page'));
  };

  function changeState(page_value) {
    if (page_value === "designs") {
      showHomepageVector();
      setTimeout(() => {
        showHomepageDesign();
      }, 1000);
    } else if (page_value === "writings") {
      showHomepageVector();
      setTimeout(() => {
        showHomepageWriting();
      }, 1000);
    } else if (page_value === "timeline") {
      showHomepageVector();
      setTimeout(() => {
        showHomepageTimeline();
      }, 1000);
    } else if (page_value === "about") {
      showHomepageVector();
      setTimeout(() => {
        showHomepageAbout();
      }, 1000);
    } else {
      console.log("Changed to homepage");
      is_homepage = true;
      showHomepageVector();
      showHomepage();
      closeTimeline();
    }
  }

  function showHomepageWriting() {
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
  }

  function showHomepageDesign() {
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
  }

  function showHomepageAbout() {
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
  }

  function showHomepageTimeline() {
    main_content.style.opacity = "0";
    setTimeout(() => {
      home_timeline.style.display = "block";
      setTimeout(() => {
        home_timeline.style.opacity = "1";
      }, 100);
      if (!is_timeline_created) {
        is_timeline_created = true;
        setTimeout(() => {
          timeline_notice.style.opacity = "0";
          setTimeout(() => {
            timeline_notice.style.display = "none";
          }, 1000);
        }, 4000);
        console.log("Creating timeline");
        timeline = new vis.Timeline(timeline_container, timeline_items, options);
        timelineOnChange();
      }
    }, 1100);
  }


  header_writing.onclick = function () {
    if (is_homepage) {
      is_homepage = false;
      window.history.pushState('page2', 'Writings', '?page=writings');
    } else {
      window.history.replaceState('page2', 'Writings', '?page=writings');
    }
    showHomepageWriting();
  };

  header_design.onclick = function () {
    if (is_homepage) {
      is_homepage = false;
      window.history.pushState('page3', 'Designs', '?page=designs');
    } else {
      window.history.replaceState('page3', 'Designs', '?page=designs');
    }
    showHomepageDesign();
  };

  header_hello.onclick = function () {
    if (is_homepage) {
      is_homepage = false;
      window.history.pushState('page4', 'About', '?page=about');
    } else {
      window.history.replaceState('page4', 'About', '?page=about');
    }
    showHomepageAbout();
  };

  ss_logo.onclick = function () {
    if (!is_homepage) {
      is_homepage = true;
      window.history.back();
    }
    showHomepage();
  };

  header_timeline.onclick = function () {
    if (is_homepage) {
      is_homepage = false;
      window.history.pushState('page5', 'Timeline', '?page=timeline');
    } else {
      window.history.replaceState('page5', 'Timeline', '?page=timeline');
    }
    showHomepageTimeline();
  };

  function startTimelineInterval(recursive) {
    if ((timeline_indicator_counter + 1) < timeline_list.length) {
      document.getElementById("loader").style.transition = "stroke-dashoffset 300ms linear";
      document.getElementById("loader").style.strokeDashoffset = 300;
      const id = "myid";
        timeline_indicator_counter += 1;
        while (timeline_list[timeline_indicator_counter]['type'] === "background" ||
        timeline_hide[timeline_list[timeline_indicator_counter]['className'].split(" ")[0]]) {
          timeline_indicator_counter += 1;
          if (timeline_indicator_counter >= timeline_list.length) {
            resetTimeline();
          }
        }
        timeline_container.style.display = "block";
        timeline_container.style.opacity = "1";
        paintPresentation(timeline_list[timeline_indicator_counter]['content'],
          new Date(timeline_list[timeline_indicator_counter]['start']).getYear() + 1900,
          timeline_list[timeline_indicator_counter]['text'] || "",
          timeline_list[timeline_indicator_counter]['image'] || false,
          timeline_list[timeline_indicator_counter]['caption'] || "",
          timeline_list[timeline_indicator_counter]['end'] || false);
        timeline.moveTo(timeline_list[timeline_indicator_counter]['start']);
        timeline.setCustomTime(new Date(timeline_list[timeline_indicator_counter]['start']), id);
        setTimeout(() => {
          timeline_container.style.opacity = "0";
          setTimeout(() => {
            timeline_container.style.display = "none";
          }, 1000);
        }, 1500);
        if (recursive) {
          timeline_indicator_pointer = setTimeout(() => {
            startTimelineInterval(true);
          }, 7000);
          setTimeout(() => {
            document.getElementById("loader").style.transition = "stroke-dashoffset 7s linear";
            document.getElementById("loader").style.strokeDashoffset = 0;
          }, 1000);
        }
    } else {
      resetTimeline();
    }
  }

  function resetTimeline() {
    timeline_instruction_status = false;
    timeline_indicator_icon.classList.remove("fa-pause");
    timeline_indicator_icon.classList.remove("fa-play");
    timeline_indicator_icon.classList.add("fa-tv");
    pauseTimelineInterval();

    timeline_forward_button.style.opacity = "0";
    setTimeout(()=> {
      timeline_forward_button.style.display = "none";
    }, 1000);

    document.getElementById("loader").style.transition = "stroke-dashoffset 300ms linear";
    document.getElementById("loader").style.strokeDashoffset = 300;

    timeline_presentation_title.style.top = "30px";
    timeline_presentation_title.style.opacity = "0";

    timeline_presentation_duration.style.top = "30px";
    timeline_presentation_duration.style.opacity = "0";

    timeline_presentation_text.style.top = "30px";
    timeline_presentation_text.style.opacity = "0";

    timeline_presentation_image_container.style.top = "30px";
    timeline_presentation_image_container.style.opacity = "0";

    timeline_container.style.display = "block";
    timeline_container.style.opacity = "1";

    timeline_indicator_status = false;
    timeline_indicator_started = false;

    timeline_indicator.style.display = "block";
    timeline_indicator.style.opacity = "1";

    timeline_play_instruction.style.opacity = "0";
    setTimeout(() => {
      timeline_play_instruction.style.display = "none";
    }, 1000);

    try {
      timeline.removeCustomTime("myid");
    }
    catch(err) {
      console.log("Timeline not played");
    }

    timeline_indicator_counter = -1;
    timeline_presentation.style.height = "0";
    if (timeline) {
      timeline.options.height = "100vh";
      timeline.options.horizontalScroll = true;
      timeline.setWindow(new Date("January 01, 2015"), new Date("May 21, 2018"));
    }
  }

  function pauseTimelineInterval() {
    timeline_indicator_started = false;
    document.getElementById("loader").style.transition = "stroke-dashoffset 500ms linear";
    document.getElementById("loader").style.strokeDashoffset = 300;
    clearTimeout(timeline_indicator_pointer);
  }

  function paintPresentation(title, duration, text, src, caption="", end="") {
    timeline_presentation_title.style.top = "30px";
    timeline_presentation_title.style.opacity = "0";

    timeline_presentation_duration.style.top = "30px";
    timeline_presentation_duration.style.opacity = "0";

    timeline_presentation_text.style.top = "30px";
    timeline_presentation_text.style.opacity = "0";

    timeline_presentation_image_container.style.top = "30px";
    timeline_presentation_image_container.style.opacity = "0";

    setTimeout(() => {
      if (end) {
        const end_date = new Date(end);
        const temp_title = title.split("</span>");
        timeline_presentation_title.innerHTML = temp_title[0] +
          " - " +
          config.month[end_date.getMonth()] +
          " " +
          String(end_date.getDay()).padStart(2, "0") +
          "</span>" + temp_title[1];
      } else {
        timeline_presentation_title.innerHTML = title;
      }
      timeline_presentation_duration.innerHTML = duration;
      timeline_presentation_text.innerHTML = text;
      if (src) {
        timeline_presentation_image.src =src;
      }
      setTimeout(() => {
        if (src) {
          timeline_presentation_caption.innerHTML = caption;
          timeline_presentation_image_container.style.top = "0";
          timeline_presentation_image_container.style.opacity = "1";
        }
      }, 700);
      timeline_presentation_title.style.top = "0";
      timeline_presentation_title.style.opacity = "1";

      timeline_presentation_duration.style.top = "0";
      timeline_presentation_duration.style.opacity = "1";

      timeline_presentation_text.style.top = "0";
      timeline_presentation_text.style.opacity = "1";
    }, 1000);
  };

  function timelinePlay() {
    if (!timeline_instruction_status) {
      timeline_instruction_status = true;
      timeline_play_instruction.style.display = "block";
      setTimeout(() => {
        timeline_play_instruction.style.opacity = "1";
      },100);
      setTimeout(() => {
        timeline_indicator_icon.classList.remove("fa-tv");
        timeline_indicator_icon.classList.add("fa-play");
      }, 500);
    } else {
      timeline_play_instruction.style.opacity = "0";
      setTimeout(() => {
        timeline_play_instruction.style.display = "none";
      }, 1000);
      document.getElementById("loader").style.strokeDashoffset = 300;

      timeline_forward_button.style.display = "block";
      timeline_forward_button.style.opacity = "1";

      timeline_indicator_icon.classList.remove("fa-play");
      if (timeline_indicator_started) {
        timeline_indicator_icon.classList.remove("fa-pause");
        timeline_indicator_icon.classList.add("fa-play");
        pauseTimelineInterval();
      } else {
        timeline_indicator_started = true;
        if (!timeline_indicator_status) {
          timeline_indicator.style.opacity = "0";
          setTimeout(() => {
            timeline_indicator.style.display = "none";
          }, 1000);

          timeline_indicator_status = true;
          const id = "myid";
          const eventProps = new Date('1998-07-08');
          timeline.options.height = "40vh";
          timeline_presentation.style.height = "60vh";
          timeline.options.horizontalScroll = false;
          timeline.setWindow("2015-01-01", "2016-01-01");
          setTimeout(() => {
            timeline.moveTo('1998-07-08');
            timeline.addCustomTime(eventProps, id);
            timeline_indicator_icon.classList.add("fa-pause");
            // TODO: Put it inside timeline object
            paintPresentation("Shashank Sharma", "8th July, 1998",
              "The day when I was born",
              "/img/timeline/shashank-sharma.jpg",
              "- It's me");
            setTimeout(() => {
              timeline_container.style.opacity = "0";
              setTimeout(() => {
                timeline_container.style.display = "none";
              }, 1000);
            }, 1500);
          }, 1000);
          timeline_indicator_pointer = setTimeout(() => {
            startTimelineInterval(true);
          }, 5000);
        } else {
          startTimelineInterval();
          timeline_indicator_icon.classList.add("fa-pause");
        }
      }
    }
  }

  timeline_forward_button.onclick = () => {
    timeline_forward_button.style.display = "none";
    timeline_indicator_icon.classList.remove("fa-pause");
    timeline_indicator_icon.classList.add("fa-play");
    document.getElementById("loader").style.strokeDashoffset = 300;
    document.getElementById("loader").style.transition = "stroke-dashoffset 500ms linear";
    clearTimeout(timeline_indicator_pointer);
    startTimelineInterval(false);
    setTimeout(() => {
      timeline_forward_button.style.display = "block";
    }, 2000)
  };

  timeline_instruction_button.onclick = () => {
    timelinePlay();
  };

  timeline_indicator_button.onclick = () => {
    timelinePlay();
  };

  // Show terminal
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

  // On click footer portal animation
  // if (footer_portal) {
  //   footer_portal.onclick = function () {
  //     footer_portal.style.animation = "spin 10s cubic-bezier(0.11,0,0.82,0.73), spin 8s linear 10s infinite";
  //     footer_portal.style.top = "-60vh";
  //     footer_expand_portal.style.height = "100vh";
  //     setTimeout(() => {
  //       footer_expand_content.style.display = 'block';
  //       footer_expand_content.style.opacity = "1";
  //     }, 1000)
  //   };
  // }

  // On resize, show image with transition and dimension
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

  // Transition to change header text with different content
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