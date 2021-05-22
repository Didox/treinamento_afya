module.exports = {
  index: (request, response) => {
    response.render('login/index');
  },
  logar: (request, response) => {
    const {email, senha} = request.body;
    if(email == "afya@gama.com" && senha == "123456"){
      response.redirect("/home");
      return;
    }
    response.render('login/index');
  }
}