mysql -u root -p
SHOW DATABASES;
USE sistemadecadastro;
SHOW TABLES;

-- Criando Tabela
CREATE TABLE usuarios(
    nome VARCHAR(50),
    email VARCHAR(100),
    idade INT
);


-- Inserindo dados na tabela
INSERT INTO usuarios (nome, email, idade) VALUES (
    "Leonardo Godoi",
    "leogodoi@gmail.com",
    8
);

-- Listar dados da tabela
SELECT * FROM usuarios;

-- Listar com parametros
SELECT * FROM usuarios WHERE idade = 8;
SELECT * FROM usuarios WHERE idade >= 18;

DELETE FROM usuarios WHERE idade < 10;
UPDATE usuarios SET nome = "Jorge" WHERE nome = "Matheus Jesus";