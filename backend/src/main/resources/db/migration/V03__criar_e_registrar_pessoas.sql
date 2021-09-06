CREATE TABLE pessoa (
	codigo BIGINT(20) PRIMARY KEY AUTO_INCREMENT,
	nome VARCHAR(50) NOT NULL,
	ativo boolean NOT NULL,
	logradouro VARCHAR(40),
	numero VARCHAR(6),
	complemento VARCHAR(50),
	bairro VARCHAR(40),
	cep VARCHAR(9),
	cidade VARCHAR(40),
	estado VARCHAR(40)	
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

INSERT INTO pessoa (nome, ativo, logradouro, numero, complemento,
bairro, cep, cidade, estado)
VALUES ('Marcelo dos Santos', true, 'Rua Santa Mendonça',
'106', 'Conjunto Habitacional', 'São Judas Tadeus',
'13950-000', 'Lindóia', 'São Paulo');

INSERT INTO pessoa (nome, ativo, logradouro, numero, complemento,
bairro, cep, cidade, estado)
VALUES ('Josias Moraiss', false, 'Rua Santa Maguida',
'1200', 'Conjunto Social', 'São Sebastião',
'12350-000', 'Florais', 'Santa Catarina');

INSERT INTO pessoa (nome, ativo, logradouro, numero, complemento,
bairro, cep, cidade, estado)
VALUES ('João Mello', true, 'Rua Pinhalzinho',
'345', 'Braz Belga', 'São Bento',
'32456-987', 'Tampa Brasil', 'Paraná');

INSERT INTO pessoa (nome, ativo, logradouro, numero, complemento,
bairro, cep, cidade, estado)
VALUES ('Carlos Zampolli', true, 'Rua Coronel Estevan Franco',
'231', 'Centro', 'Vilaje das Águas',
'12456-987', 'Aguas de São Bento', 'Minas Gerais');

INSERT INTO pessoa (nome, ativo, logradouro, numero, complemento,
bairro, cep, cidade, estado)
VALUES ('Jão Carlos de Souza', false, 'Rua Jordão',
'3245', 'São Matheus', 'Centro',
'12343-456', 'Jaguará', 'São Paulo');
