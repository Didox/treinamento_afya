const jwt = require('jsonwebtoken')
const environment = require(`../config/environment/${process.env.ENV || 'dev'}`);

module.exports = class JwtToken{
  static fabricaToken(usuario){
    return jwt.sign({ id: usuario.id }, environment.jwt.usuario.secret, {expiresIn: environment.jwt.usuario.expire})
  }
}