const HomeController = {
  index: (request, response) => {
    response.status(200).send({mensagem: "Uma API do afya labs"});
  }
}

module.exports = HomeController;