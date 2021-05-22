const Cookie = require("../helpers/cookie")

module.exports = (req, res, next) => {
  let usuario = Cookie.get('usuarioLogado', req)
  if(!usuario){
    res.redirect("/")
    return;
  }

  req.usuario = JSON.parse(unescape(usuario));
  next();
}