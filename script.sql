CREATE TABLE paciente (
    idpaciente int(11) NOT NULL PRIMARY KEY AUTO_INCREMENT UNIQUE,
    nome varchar(255) NOT NULL, idade INTEGER NOT NULL,
    peso varchar(255) NOT NULL, altura FLOAT NOT NULL,
    imc varchar(255) NOT NULL,
    gordura_corporal float(11) NOT NULL );

INSERT INTO paciente(nome,idade,peso,altura,imc,gordura_corporal) values ("gilberto",14,100,1.20,20,10);
