const config = {
  backend_base_url: 'https://shashank-sharma.herokuapp.com',
  spreadsheet: "/api/docs/spreadsheet/",
  profile: "/api/accounts/user/",
  loading_animation: ['|', '/', '-', '\\']
};

const HTTP_STATUS_CODE = {
  200: "[[b;#90EE90;]Wubba Lubba Dab Dab !",
  201: "[[b;#90EE90;]Nice work morty, Created",
  400: "[[b;red;]Piece of shit Morty, what is this ?",
  401: "[[b;red;]You are not my morty ... Who are you ?",
  404: "[[b;orange;]Page not found",
  500: "[[b;red;]Morty, What did you do !!!! ... It's over",
  503: "[[b;red;]Morty, I think portal is not working"
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
      term.echo("");
      term.update(-1, config.loading_animation[counter]);
      counter++;
      if (counter > loadingAnimation.length) {
        counter = 0
      }
    }, 200);
  }

  function check_token() {
    const token = localStorage.getItem("token");
    return new Promise(async (resolve) => {
      if (token === undefined || token === "") {
        resolve(["[[b;red;]Not logged in", false])
        this.echo('');
      } else {
        const response = await request(url = config.profile, method = "GET");
        console.log(response);
        if (JSON.stringify(response) === "{}") {
          resolve(["[[b;red;]Token is expired", false])
        } else {
          resolve(["[[b;#90EE90;]Morty you are in !", true])
        }
      }
    });
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

  function request(url, method = "GET", json_data = false) {
    loading();
    const settings = {
      "url": config.backend_base_url + url,
      "method": method,
      "headers": {
        "content-type": "application/json",
        "Authorization": "JWT " + localStorage.getItem("token")
      },
      statusCode: {
        404: () => {
          term.update(-1, HTTP_STATUS_CODE["404"])
        },
        400: () => {
          term.update(-1, HTTP_STATUS_CODE["400"]);
        },
        401: () => {
          term.update(-1, HTTP_STATUS_CODE["401"]);
          term.set_prompt("[[b;#90EE90;]guest@server$ ");
          localStorage.setItem("token", "");
        },
        200: () => {
          term.update(-1, HTTP_STATUS_CODE["200"]);
        },
        201: () => {
          term.update(-1, HTTP_STATUS_CODE["201"]);
        },
        500: () => {
          term.update(-1, HTTP_STATUS_CODE["500"]);
        }
      }
    };

    if (json_data) {
      settings["data"] = JSON.stringify(json_data);
    }

    return new Promise(resolve => {
      $.ajax(settings)
        .done((response) => {
          clearInterval(loadingAnimation);
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
    this.pause();
    loading();
    const response = await authenticate(username, password);
    if (response['token']) {
      localStorage.setItem("token", response['token']);
      this.set_prompt("[[b;#90EE90;]shashank@server$ ")
    }
    this.resume();
  }

  async function appendData(json_data) {
    term.pause();
    const response = await request(url = config.spreadsheet, method = "POST", data = json_data);
    term.resume();
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
    tr: function (...args) {
      const options = $.terminal.parse_options(args);
      const check_for = ["source", "type", "link"];
      const json_data = {
        filename: "TOREAD",
        data: {
          source: options.s,
          type: options.t,
          link: options.l,
          status: options.status === undefined ? "F" : "T",
          priority: options.p === undefined ? "L" : options.p,
          description: options.d === undefined ? "" : options.d,
          created_at: new Date().toString(),
          updated_at: new Date().toString()
        }
      };

      let flag = false;
      for (let i of check_for) {
        if (json_data['data'][i] === undefined) {
          this.echo("Missing args --" + i);
          flag = true
        }
      }

      if (flag) {
        return;
      }

      appendData(json_data);

    },
    exit: exit,
  }, {
    name: 'terminal',
    exit: false,
    completion: true,
    greetings: '',
    checkArity: false,
    enabled: $('body').attr('onload') === undefined,
    onResize: set_size,
    onInit: function () {
      this.pause();
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
      check_token().then((response) => {
        this.echo(response[0]);
        this.echo('');
        if (response[1]) {
          this.set_prompt("[[b;#90EE90;]shashank@server$ ");
        }
        this.resume();
      });
    },
    prompt: "[[b;#90EE90;]guest@server$ "
  });
});