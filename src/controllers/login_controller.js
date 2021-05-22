
const Cookie = require("../helpers/cookie")
const Usuario = require("../models/usuario")

module.exports = {
  index: (request, response) => {
    response.render('login/index', {erro:undefined});
  },
  logar: async (request, response) => {
    const {email, senha} = request.body;
    let usuarios = await Usuario.buscaPorEmailSenha(email, senha)
    if(usuarios.length > 0){
      let usuario = new Usuario(usuarios[0]);
      usuario.senha = undefined;
      Cookie.set('usuarioLogado', JSON.stringify(usuario), response, 600000);
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