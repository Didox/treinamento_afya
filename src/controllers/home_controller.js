module.exports = {
  index: (request, response) => {
    response.render('home/index', {title: "Home"});
  }
}