const jwt = require('jsonwebtoken')
const environment = require(`../config/environment/${process.env.ENV || 'dev'}`);

module.exports = (req, res, next) => {
  const authHeader = req.headers.authorization 
  if(!authHeader){
    return res.status(401).send({mensagem: "Usuário não autenticado"})
  }

  const parts = authHeader.split(" ")
  if(parts.length !== 2){
    return res.status(401).send({mensagem: "Usuario não autenticado"})
  }

  const [ scheme, token ] = parts

  if(!/^Bearer$/i.test(scheme)){
    return res.status(401).send({mensagem: "Usuario não autenticado"})
  }

  jwt.verify(token, environment.jwt.usuario.secret, (error, usuario) => {
    if(error) return res.status(401).send({mensagem: "Usuario não autenticado"})
    req.usuarioId = usuario.id
    return next();
  })

}