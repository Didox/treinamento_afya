
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
  },
  update: async (request, response) => {
    console.log(request.params)
    const usuario = new Usuario(request.body);
    usuario.id = request.params.id;
    await usuario.salvar();
    response.status(204).end()
  },
  delete: async (request, response) => {
    const id = request.params.id;
    await Usuario.excluirPorId(id);
    response.status(204).send({});
  }
}