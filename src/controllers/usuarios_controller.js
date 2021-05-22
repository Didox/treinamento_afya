
const Usuario = require("../models/usuario")
const Cookie = require("../helpers/cookie")

module.exports = {
  form: (request, response) => {
    response.render('usuarios/form', {usuario: new Usuario()});
  },
  criar: async (request, response) => {
    const usuario = new Usuario(request.body);
    await usuario.salvar();
    usuario.senha = undefined;
    Cookie.set('usuarioLogado', JSON.stringify(usuario), response, 600000);
    response.redirect('/home');
  }
}