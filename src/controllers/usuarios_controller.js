
const Usuario = require("../models/usuario")

module.exports = {
  index: async (request, response) => {
    response.status(200).send(await Usuario.todos());
  },
  criar: async (request, response) => {
    const usuario = new Usuario(request.body);
    await usuario.salvar();
    usuario.senha = undefined;
    response.status(200).send(usuario);
  }
}