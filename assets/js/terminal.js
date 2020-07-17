const config = {
  backend_base_url: 'https://shashank-sharma.herokuapp.com',
  loading_animation: ['|', '/', '-', '\\']
};

const HTTP_STATUS_CODE = {
  200: "[[b;green;]Morty, you are in ... Wubba Lubba Dab Dab !",
  400: "[[b;red;]Piece of shit Morty, what is this ?",
  404: "[[b;orange;]Page not found",
  500: "[[b;red;]Morty, What did you do !!!! ... It's over",
}

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
    let counter = 0;
    loadingAnimation = setInterval(() => {
      term.update(-1, config.loading_animation[counter]);
      counter++;
      if (counter > loadingAnimation.length) {
        counter = 0
      }
    }, 200);
  }

  function authenticate(username, password) {
    const settings = {
      "url": config.backend_base_url + "/api/accounts/login/",
      "method": "POST",
      "headers": {
        "content-type": "application/json",
      },
      "data": JSON.stringify({
        "phone_number": username,
        "password": password
      }),
      statusCode: {
        404: () => {
          term.update(-1, HTTP_STATUS_CODE["404"])
        },
        400: () => {
          term.update(-1, HTTP_STATUS_CODE["400"]);
        },
        200: () => {
          term.update(-1, HTTP_STATUS_CODE["200"]);
        },
        500: () => {
          term.update(-1, HTTP_STATUS_CODE["500"]);
        }
      }
    };

    return new Promise(resolve => {
      $.ajax(settings)
        .done((response) => {
        clearInterval(loadingAnimation);
        console.log(response);
        resolve(response);
      })
        .fail(() => {
          clearInterval(loadingAnimation);
          resolve({});
        });
    });
  }

  function getLoginInput() {
    return new Promise(resolve => {
      term.read('username: ').then(username => {
        term.set_mask('').read('password: ').then(password => {
          term.echo(" ");
          term.set_mask(false);
          resolve([
            username,
            password
          ]);
        });
      });
    });
  }

  async function login() {
    const [username, password] = await getLoginInput();
    loading();
    const response = await authenticate(username, password);
    if (response['token']) {
      localStorage.setItem("token", response['token']);
    }
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