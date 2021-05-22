const Cookie = require("../helpers/cookie")

module.exports = (req, res, next) => {
  let usuarioId = Cookie.get('usuarioLogado', req)
  if(!usuarioId){
    res.redirect("/")
    return;
  }

  req.usuarioId = usuarioId;
  next();
}