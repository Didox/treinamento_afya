const Cookie = require("../helpers/cookie")
const HomeController = {
  index: (request, response) => {
    response.render('home/index', {usuario: request.usuario});
  },
  utilitiesColor: (request, response) => {
    response.render('home/utilitiesColor', {usuario: request.usuario});
  },
}

module.exports = HomeController;