window.onload = function () {
  const container = document.getElementById("visualization");
  const internship_indicator = document.getElementById("internship-indicator");

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
      content: "Codechef | Started",
      start: "2015-03-24", className: "project"
    },
    {
      id: "Google-code-in",
      content: "Google Code-in 2015",
      start: "2015-12-12", end: "2016-03-01", className: "volunteer"
    },
    { id: 0, content: "College started", start: "2016-05-09", className: "event" },
    { id: "competitive-codechef-start", content: "Codechef | competitive coding", start: "2016-08-12", end: "2016-12-31", className: "project" },
    { id: "competitive-hackerearth-start", content: "Hackerearth", start: "2016-10-01", end: "2017-10-10", className: "project" },
    // Aug 3, 2017
    { id: "internship-1", content: '<span style="font-weight:600;">Aug 03</span><br/>Newrubric', start: "2017-08-03", end: "2018-03-12", className: "internship" },
    { id: "internship-2", content: "Teknuance", start: "2017-11-20", end: "2018-05-08", className: "internship" },
    { id: "internship-3", content: "AudienceSutra", start: "2018-02-06", end: "2018-08-15", className: "internship" },
    { id: "internship-4", content: "YourDOST", start: "2018-06-07", end: "2018-09-25", className: "internship" },
    { id: "internship-5", content: "AbsoluteFace", start: "2018-09-03", end: "2018-11-01", className: "internship" },
    { id: "internship-6", content: "Omoads", start: "2018-10-23", end: "2018-12-22", className: "internship" },
    { id: "internship-7", content: "Axcelorate Labs pvt ltd", start: "2019-05-05", end: "2019-12-02", className: "internship" },
    { id: "internship-8", content: "Atlan", start: "2019-12-09", end: "2020-06-20", className: "internship" },
    { id: "certification-0", content: "NPTEL: Introduction to Python", start: "2017-01-11", end: "2017-6-15", className: "certification" },
    { id: "certification-1", content: "CS50: Harvard University", start: "2017-09-01", end: "2018-01-10", className: "certification" },
    { id: "certification-2", content: "Udacity: Google India Challenge Scholarship", start: "2018-02-01", className: "certification" },
    { id: "certification-3", content: "Infosys Certified", start: "2019-08-14", className: "certification" },
    { id: "volunteer-1", content: "College: Technical Club", start: "2018-05-01", className: "volunteer" },
    { id: "volunteer-2", content: "DSC: Project Lead", start: "2019-08-01", end: "2020-06-01", className: "volunteer" },
    { id: "volunteer-3", content: "DjangoGirls: Mentor", start: "2019-08-14", className: "volunteer" },
    { id: "volunteer-4", content: "Isohack: Hackathon organized", start: "2020-02-22", className: "volunteer" },
    { id: "volunteer-5", content: "DjangoGirls: Co-organizer", start: "2019-11-01", className: "volunteer" },
    { id: "volunteer-6", content: "GirlScript Summer of Code", start: "2020-02-01", end: "2020-06-01", className: "volunteer" },
    { id: "hackathon-1", content: "Smart India Hackathon 2018", start: "2018-03-28", className: "hackathon" },
    { id: "hackathon-2", content: "NITI: Pune Hackathon", start: "2018-09-29", className: "hackathon" },
    { id: "hackathon-3", content: "HackAcro | Winner", start: "2018-10-30", className: "hackathon" },
    { id: "hackathon-4", content: "Void Hacks, Indore", start: "2019-04-05", className: "hackathon" },
    { id: "hackathon-5", content: "College: Winner, Project Exhibition", start: "2019-8-26", className: "hackathon" },
    { id: "hackathon-6", content: "HackIndore 2.0", start: "2019-10-04", className: "hackathon" },
    { id: "hackathon-7", content: "Version Beta 2.0, Bhopal", start: "2019-10-11", className: "hackathon" },
    { id: "project-1", content: "#100DaysOfCode", start: "2017-01-02", className: "volunteer" },
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
    editable: false,
    // margin: {
    //   item: 10, // minimal margin between items
    //   axis: 5, // minimal margin between items and the axis
    // }
  };

  // Create a Timeline
  const timeline = new vis.Timeline(container, items, options);
  // const {min, max} = timeline.getItemRange();
  // a0 = 10;
  // a100 = moment.duration(moment(max).diff(moment(min))).asMilliseconds();
  // distance = (a100 - a0)/ 100 ;

  // timeline.on("rangechanged", function({ start, end }) {
  //   console.log(start.toString(), end.toString());
  //   start = moment(start);
  //   end = moment(end);
  //   const duration = moment.duration(end.diff(start));
  //   const mins = duration.asMilliseconds();
  //   // Arithmatic progression variables
  //   console.log(mins, distance, timeline.getItemRange())
  //   if (mins !== 0) {
  //     const x = (mins - a0) / distance; // Arithmatic progression formula
  //     document.getElementById("zoomLevel").value = x;
  //   } else {
  //     document.getElementById("zoomLevel").value = 100;
  //   }
  //
  // });

  // function getZoomLevel() {
  //   const x = document.getElementById("zoomLevel").value;
  //   console.log(x);
  // }
  internship_indicator.onclick = function () {
    console.log("Clicked");
  }

};