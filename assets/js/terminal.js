$(document).ready(function () {
  const scanlines = $('.scanlines');
  const flicker = $('.flicker');
  const consoleElement = $('.console');
  let loadingAnimation = null;

  function set_size() {
    const height = $(window).height();
    const width = $(window).width();
    const time = (height * 2) / 170;
    scanlines[0].style.setProperty("--time", time);
    consoleElement[0].style.setProperty("--width", width);
    consoleElement[0].style.setProperty("--height", height);
  }

  function loading() {
    let counter = 1;
    loadingAnimation = setInterval(() => {
      term.update(-1, ". ".repeat(counter));
      counter++;
    }, 700);
  }

  function login() {
    this.read('username: ').then(username => {
      this.set_mask('').read('pass: ').then(pass => {
        this.echo(" ");
        this.set_mask(false);
        loading();
        setTimeout(() => {
          clearInterval(loadingAnimation);
          this.echo(username + " " + pass);
        }, 5000);
      });
    });
  }

  function clear() {
    term.clear();
  }

  function exit() {
    $('.console').addClass('collapse');
    term.disable();
  }

  function vanilla() {
    scanlines.remove();
    flicker.remove()
  }

  const term = $('#term').terminal({
    login: login,
    vanilla: vanilla,
    clear: clear,
    exit: exit,
  }, {
    name: 'terminal',
    exit: false,
    completion: true,
    greetings: '',
    enabled: $('body').attr('onload') === undefined,
    onResize: set_size,
    onInit: function () {
      set_size();
      // [[b;#fff;]exit]
      const img = $('<a href="https://github.com/shashank-sharma/shashank-sharma.github.io" target="_blank">' +
        '<img class="portal" src="/img/portal.png">' +
        '</a>');
      this.echo(img);
      this.echo('');
      this.echo('Welcome to the land of Mythicality Morty .... *BURP* ....');
      this.echo('This ... this place is loaded with looooot of things');
      this.echo('Go ahead morty .... type something');
      this.echo('');
    },
    prompt: "[[;red;]>>> ]"
  });
});