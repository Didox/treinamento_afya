const Cookie = require("../helpers/cookie")
const HomeController = {
  index: (request, response) => {
    response.render('home/index', {title: "Home"});
  },
  utilitiesColor: (request, response) => {
    response.render('home/utilitiesColor');
  },
}

module.exports = HomeController;