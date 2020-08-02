window.onload = function () {
  window.onscroll = function () {
    scroll()
  };

  function scroll() {
    const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolled = (winScroll / height);
    console.log(parseInt(300 * scrolled).toString());
    document.getElementById("loader").style.strokeDashoffset = (300 - parseInt(260 * scrolled)).toString();
  }
};