
const Cookie = require("../helpers/cookie")

module.exports = {
  index: (request, response) => {
    response.render('login/index', {erro:undefined});
  },
  logar: (request, response) => {
    const {email, senha} = request.body;
    if(email == "afya@gama.com" && senha == "123456"){
      Cookie.set('usuarioLogado', 1, response, 600000);
      response.redirect("/home");
      return;
    }
    // response.redirect('/');
    response.render('login/index', {erro: "Login ou senha inválidos"});
  },
  logout: (request, response) => {
    Cookie.set('usuarioLogado', undefined, response, -1);
    response.redirect("/");
  }
}