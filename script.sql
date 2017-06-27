create database NutriSaw;
use NutriSaw;
CREATE TABLE nutricionista(
    idnutricionista INTEGER NOT NULL PRIMARY KEY UNIQUE,
    nome TEXT NOT NULL
);

CREATE TABLE paciente (
    idpaciente INTEGER NOT NULL PRIMARY KEY UNIQUE,
    nome TEXT NOT NULL,
    idade INTEGER NOT NULL,
    peso FLOAT NOT NULL,
    altura FLOAT NOT NULL,
    sexo TEXT NOT NULL,
    imc FLOAT NOT NULL,
    gordura_corporal FLOAT NOT NULL,
    idnutricionista INTEGER NOT NULL references nutricionista(idnutricionista)
);

INSERT INTO nutricionista VALUES(1, 'Capra');
INSERT INTO nutricionista VALUES(2, 'Maria');

INSERT INTO paciente VALUES (1,'Atila',22,82.0,1.72,'M',27.2,25.0,1);
INSERT INTO paciente VALUES (2,'Matheus',21,110.0,1.72,'M',30.3,30.0,1);
INSERT INTO paciente VALUES (3,'Tavares',21,100.0,1.74,'M',28.4,30.0,1);
INSERT INTO paciente VALUES (4,'Fulana',22,82.0,1.72,'F',27.2,25.0,2);

			