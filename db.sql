CREATE TABLE usuarios(
   id SERIAL PRIMARY KEY,
   nome VARCHAR(100) NOT null,
   email VARCHAR(200) NOT null,
   senha VARCHAR(255) NOT null
);

insert into usuarios(nome, email, senha)values('afya', 'afya@gama.com', '123456')

select * from usuarios;