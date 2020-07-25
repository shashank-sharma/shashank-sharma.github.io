window.onload = function () {
  const container = document.getElementById("visualization");
  const internship_indicator = document.getElementById("internship-indicator");
  const hackathon_indicator = document.getElementById("hackathon-indicator");
  const certification_indicator = document.getElementById("certification-indicator");
  const volunteer_indicator = document.getElementById("volunteer-indicator");
  const project_indicator = document.getElementById("project-indicator");


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
      start: "2015-12-12", end: "2016-03-01", className: "volunteer"
    },
    { id: 0, content: '<span style="font-weight:600;">May 09</span><br/>College started', start: "2016-05-09", className: "event no-end" },
    { id: "competitive-codechef-start", content: '<span style="font-weight:600;">Aug 12</span><br/>Codechef | competitive coding', start: "2016-08-12", end: "2016-12-31", className: "project" },
    { id: "competitive-hackerearth-start", content: '<span style="font-weight:600;">Oct 01</span><br/>Hackerearth', start: "2016-10-01", end: "2017-10-10", className: "project" },
    // Aug 3, 2017
    { id: "internship-1", content: '<span style="font-weight:600;">Aug 03</span><br/>Newrubric', start: "2017-08-03", end: "2018-03-12", className: "internship" },
    { id: "internship-2", content: '<span style="font-weight:600;">Nov 20</span><br/>Teknuance', start: "2017-11-20", end: "2018-05-08", className: "internship" },
    { id: "internship-3", content: '<span style="font-weight:600;">Feb 02</span><br/>AudienceSutra', start: "2018-02-06", end: "2018-08-15", className: "internship" },
    { id: "internship-4", content: '<span style="font-weight:600;">Jun 07</span><br/>YourDOST', start: "2018-06-07", end: "2018-09-25", className: "internship" },
    { id: "internship-5", content: '<span style="font-weight:600;">Sep 03</span><br/>AbsoluteFace', start: "2018-09-03", end: "2018-11-01", className: "internship" },
    { id: "internship-6", content: '<span style="font-weight:600;">Oct 23</span><br/>Omoads', start: "2018-10-23", end: "2018-12-22", className: "internship" },
    { id: "internship-7", content: '<span style="font-weight:600;">May 05</span><br/>Axcelorate Labs pvt ltd', start: "2019-05-05", end: "2019-12-02", className: "internship" },
    { id: "internship-8", content: '<span style="font-weight:600;">Dec 09</span><br/>Atlan', start: "2019-12-09", end: "2020-06-20", className: "internship" },
    { id: "certification-0", content: '<span style="font-weight:600;">Jan 11</span><br/>NPTEL: Introduction to Python', start: "2017-01-11", end: "2017-6-15", className: "certification" },
    { id: "certification-1", content: '<span style="font-weight:600;">Sep 01</span><br/>CS50: Harvard University', start: "2017-09-01", end: "2018-01-10", className: "certification" },
    { id: "certification-2", content: '<span style="font-weight:600;">Feb 01</span><br/>Udacity: Google India Challenge Scholarship', start: "2018-02-01", className: "certification no-end" },
    { id: "certification-3", content: '<span style="font-weight:600;">Aug 14</span><br/>Infosys Certified', start: "2019-08-14", className: "certification no-end" },
    { id: "volunteer-1", content: '<span style="font-weight:600;">May 01</span><br/>College: Technical Club', start: "2018-05-01", className: "volunteer no-end" },
    { id: "volunteer-2", content: '<span style="font-weight:600;">Aug 01</span><br/>DSC: Project Lead', start: "2019-08-01", end: "2020-06-01", className: "volunteer" },
    { id: "volunteer-3", content: '<span style="font-weight:600;">Aug 14</span><br/>DjangoGirls: Mentor', start: "2019-08-14", className: "volunteer no-end" },
    { id: "volunteer-4", content: '<span style="font-weight:600;">Feb 22</span><br/>Isohack: Hackathon organized', start: "2020-02-22", className: "volunteer no-end" },
    { id: "volunteer-5", content: '<span style="font-weight:600;">Nov 01</span><br/>DjangoGirls: Co-organizer', start: "2019-11-01", className: "volunteer no-end" },
    { id: "volunteer-6", content: '<span style="font-weight:600;">Feb 01</span><br/>GirlScript Summer of Code', start: "2020-02-01", end: "2020-06-01", className: "volunteer" },
    { id: "hackathon-1", content: '<span style="font-weight:600;">Mar 28</span><br/>Smart India Hackathon 2018', start: "2018-03-28", className: "hackathon no-end" },
    { id: "hackathon-2", content: '<span style="font-weight:600;">Sep 29</span><br/>NITI: Pune Hackathon', start: "2018-09-29", className: "hackathon no-end" },
    { id: "hackathon-3", content: '<span style="font-weight:600;">Oct 30</span><br/>HackAcro | Winner', start: "2018-10-30", className: "hackathon no-end" },
    { id: "hackathon-4", content: '<span style="font-weight:600;">Apr 05</span><br/>Void Hacks, Indore', start: "2019-04-05", className: "hackathon no-end" },
    { id: "hackathon-5", content: '<span style="font-weight:600;">Aug 26</span><br/>College: Winner, Project Exhibition', start: "2019-8-26", className: "hackathon no-end" },
    { id: "hackathon-6", content: '<span style="font-weight:600;">Oct 04</span><br/>HackIndore 2.0', start: "2019-10-04", className: "hackathon no-end" },
    { id: "hackathon-7", content: '<span style="font-weight:600;">Oct 11</span><br/>Version Beta 2.0, Bhopal', start: "2019-10-11", className: "hackathon no-end" },
    { id: "project-1", content: '<span style="font-weight:600;">Jan 02</span><br/>#100DaysOfCode', start: "2017-01-02", className: "volunteer no-end" },
  ]);

  // Configuration for the Timeline
  const options = {
    stack: true,
    horizontalScroll: true,
    zoomKey: "ctrlKey",
    width: "100%",
    height: "100vh",
    start: new Date("January 21, 2014"),
    end: new Date("January 21, 2019"),
    editable: false
  };

  // Create a Timeline
  const timeline = new vis.Timeline(container, items, options);

  function reveal_cards(type) {
    const card_list = document.getElementsByClassName(type);
    if (card_list[0].style.opacity !== "0") {
      for (let card of card_list) {
        card.style.opacity = "0";
        setTimeout(() => {
          card.style.display = "none";
        }, 1000)
      }
    } else {
      for (let card of card_list) {
        card.style.display = "block";
        setTimeout(() => {
          card.style.opacity = "1";
        }, 100);
      }
    }
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
  }

};