
module.exports = {
  get: (key, request) => {
    let cookieParse = {},
      rc = request.headers.cookie;
  
    rc && rc.split(';').forEach(function( cookie ) {
      let parts = cookie.split('=');
      cookieParse[parts.shift().trim()] = decodeURI(parts.join('='));
    });
  
    return cookieParse[key];
  },
  set: (key, value, response, maxAge) => {
    response.cookie(key, value, { maxAge: maxAge, httpOnly: true })
  }
}