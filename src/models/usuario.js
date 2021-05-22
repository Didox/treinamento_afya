const db = require("../config/db");

module.exports = class Usuario{
  constructor(obj = {}){
    this.id = obj.id
    this.nome = obj.nome
    this.email = obj.email
    this.senha = obj.senha
  }

  static async excluirPorId(id){
    await db.execute("delete from usuarios where id=$1", [
      id
    ]);
  }

  static async todos(){
    return await db.execute("select * from usuarios");
  }

  static async buscaPorEmailSenha(email, senha){
    try{
      return await db.execute("select * from usuarios where email=$1 and senha=$2", [
        email,
        senha
      ]);
    }
    catch(e){
      throw "Login e senha inválidos"
    }
  }

  async salvar(){
    if(this.id && parseInt(this.id) > 0){
      await db.execute("update usuarios set nome=$1, email=$2, senha=$3 where id=$4", [
        this.nome,
        this.email,
        this.senha,
        this.id
      ]);
    }
    else{
      await db.execute("insert into usuarios(nome,email,senha)values($1,$2,$3)", [
        this.nome,
        this.email,
        this.senha
      ]);
    }
  }
}