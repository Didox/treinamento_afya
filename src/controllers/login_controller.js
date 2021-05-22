
const Usuario = require("../models/usuario")
const JwtToken = require("../helpers/jwtToken")

module.exports = {
  logar: async (request, response) => {
    const {email, senha} = request.body;
    let usuarios = await Usuario.buscaPorEmailSenha(email, senha)
    if(usuarios.length > 0){
      let usuario = usuarios[0];
      usuario.senha = undefined;
      usuario.token = JwtToken.fabricaToken(usuario)
      response.status(200).send(usuario);
      return;
    }
    
    response.status(401).send({
      mensagem: "Login ou senha inválidos"
    });
  }
}