create database NutriSaw;
use NutriSaw;
CREATE TABLE nutricionista(
    idnutricionista INTEGER  AUTO_INCREMENT PRIMARY KEY ,
    nome TEXT NOT NULL
);

CREATE TABLE paciente (
    idpaciente INTEGER AUTO_INCREMENT PRIMARY KEY ,
    nome TEXT NOT NULL,
    idade INTEGER NOT NULL,
    peso FLOAT NOT NULL,
    altura FLOAT NOT NULL,
    sexo TEXT NOT NULL,
    imc FLOAT NOT NULL,
    gordura_corporal FLOAT NOT NULL
);

INSERT INTO nutricionista(nome) VALUES('Capra');
INSERT INTO nutricionista(nome) VALUES('Maria');

INSERT INTO paciente(nome,idade,peso,altura,sexo,imc,gordura_corporal) VALUES ('Atila',22,82.0,1.72,'M',27.2,25.0);
INSERT INTO paciente(nome,idade,peso,altura,sexo,imc,gordura_corporal) VALUES ('Matheus',21,110.0,1.72,'M',30.3,30.0);
INSERT INTO paciente(nome,idade,peso,altura,sexo,imc,gordura_corporal) VALUES ('Tavares',21,100.0,1.74,'M',28.4,30.0);
INSERT INTO paciente(nome,idade,peso,altura,sexo,imc,gordura_corporal) VALUES ('Fulana',22,82.0,1.72,'F',27.2,25.0);

			