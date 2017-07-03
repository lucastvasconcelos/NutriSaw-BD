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

INSERT INTO paciente(nome,idade,peso,altura,sexo,imc,gordura_corporal) VALUES ('Atila',22,82.0,1.72,'M',27.7,26.0);
INSERT INTO paciente(nome,idade,peso,altura,sexo,imc,gordura_corporal) VALUES ('Matheus',21,110.0,1.72,'M',37.2,25.0);
INSERT INTO paciente(nome,idade,peso,altura,sexo,imc,gordura_corporal) VALUES ('Tavares',21,100.0,1.74,'M',33.0,22.0);
INSERT INTO paciente(nome,idade,peso,altura,sexo,imc,gordura_corporal) VALUES ('Bonifacio',19,92.0,1.80,'M',22.6,27.0);
INSERT INTO paciente(nome,idade,peso,altura,sexo,imc,gordura_corporal) VALUES ('Ramon',45,67.0,1.72,'M',22.6,17.0);
INSERT INTO paciente(nome,idade,peso,altura,sexo,imc,gordura_corporal) VALUES ('Thor',48,70.0,1.80,'M',21.6,25.0);
INSERT INTO paciente(nome,idade,peso,altura,sexo,imc,gordura_corporal) VALUES ('Waldemar',54,81.0,1.74,'M',28.4,27.0);
INSERT INTO paciente(nome,idade,peso,altura,sexo,imc,gordura_corporal) VALUES ('Tobias',30,108.0,1.79,'M',26.8,18.0);
INSERT INTO paciente(nome,idade,peso,altura,sexo,imc,gordura_corporal) VALUES ('Mario',35,60.0,1.66,'M',21.8,16.0);
INSERT INTO paciente(nome,idade,peso,altura,sexo,imc,gordura_corporal) VALUES ('Estavan',48,91.0,1.64,'M',33.8,26.0);
INSERT INTO paciente(nome,idade,peso,altura,sexo,imc,gordura_corporal) VALUES ('Gilberto',42,94.0,1.74,'M',31.0,21.0);
INSERT INTO paciente(nome,idade,peso,altura,sexo,imc,gordura_corporal) VALUES ('Lazzaro',49,71.0,1.69,'M',24.9,30.0);
INSERT INTO paciente(nome,idade,peso,altura,sexo,imc,gordura_corporal) VALUES ('Stefano',21,104.0,1.88,'M',29.4,19.0);
INSERT INTO paciente(nome,idade,peso,altura,sexo,imc,gordura_corporal) VALUES ('Elias',50,84.0,1.82,'M',25.4,15.0);
INSERT INTO paciente(nome,idade,peso,altura,sexo,imc,gordura_corporal) VALUES ('Herberto',43,71.0,1.85,'M',20.7,23.0);
INSERT INTO paciente(nome,idade,peso,altura,sexo,imc,gordura_corporal) VALUES ('Silvestro',23,84.0,1.77,'M',26.8,19.0);
INSERT INTO paciente(nome,idade,peso,altura,sexo,imc,gordura_corporal) VALUES ('Rodolfo',57,87.0,1.84,'M',25.7,20.0);
INSERT INTO paciente(nome,idade,peso,altura,sexo,imc,gordura_corporal) VALUES ('Isaac',58,75.0,1.70,'M',26.0,24.0);
INSERT INTO paciente(nome,idade,peso,altura,sexo,imc,gordura_corporal) VALUES ('Romano',28,97.0,1.73,'M',32.4,22.0);
INSERT INTO paciente(nome,idade,peso,altura,sexo,imc,gordura_corporal) VALUES ('Italo',37,98.0,1.82,'M',29.6,16.0);
INSERT INTO paciente(nome,idade,peso,altura,sexo,imc,gordura_corporal) VALUES ('Abel',20,68.0,1.84,'M',20.1,18.0);
INSERT INTO paciente(nome,idade,peso,altura,sexo,imc,gordura_corporal) VALUES ('Solomon',23,99.0,1.67,'M',35.5,17.0);
INSERT INTO paciente(nome,idade,peso,altura,sexo,imc,gordura_corporal) VALUES ('Alonzo',40,85.0,1.65,'M',31.2,26.0);
INSERT INTO paciente(nome,idade,peso,altura,sexo,imc,gordura_corporal) VALUES ('Edelmiro',43,102.0,1.87,'M',29.2,21.0);
INSERT INTO paciente(nome,idade,peso,altura,sexo,imc,gordura_corporal) VALUES ('Adolfo',20,85.0,1.88,'M',24.0,24.0);
INSERT INTO paciente(nome,idade,peso,altura,sexo,imc,gordura_corporal) VALUES ('Emmanuel',43,95.0,1.79,'M',29.6,27.0);
INSERT INTO paciente(nome,idade,peso,altura,sexo,imc,gordura_corporal) VALUES ('Ramiro',44,93.0,1.78,'M',29.4,19.0);
INSERT INTO paciente(nome,idade,peso,altura,sexo,imc,gordura_corporal) VALUES ('Teofilo',41,88.0,1.84,'M',28.4,28.0);
INSERT INTO paciente(nome,idade,peso,altura,sexo,imc,gordura_corporal) VALUES ('Helder',38,66.0,1.85,'M',26.0,26.0);
INSERT INTO paciente(nome,idade,peso,altura,sexo,imc,gordura_corporal) VALUES ('Guilherme',49,75.0,1.62,'M',28.6,24.0);
INSERT INTO paciente(nome,idade,peso,altura,sexo,imc,gordura_corporal) VALUES ('Heitor',53,69.0,1.68,'M',24.1,26.0);
INSERT INTO paciente(nome,idade,peso,altura,sexo,imc,gordura_corporal) VALUES ('Leandro',30,94.0,1.87,'M',28.4,16.0);
INSERT INTO paciente(nome,idade,peso,altura,sexo,imc,gordura_corporal) VALUES ('Matias',53,71.0,1.84,'M',26.9,27.0);
INSERT INTO paciente(nome,idade,peso,altura,sexo,imc,gordura_corporal) VALUES ('Fabrizio',59,60.0,1.82,'M',18.1,16.0);
INSERT INTO paciente(nome,idade,peso,altura,sexo,imc,gordura_corporal) VALUES ('Marcela',40,67.0,1.86,'F',19.4,23.0);
INSERT INTO paciente(nome,idade,peso,altura,sexo,imc,gordura_corporal) VALUES ('Margarida',36,94.0,1.70,'F',32.5,18.0);
INSERT INTO paciente(nome,idade,peso,altura,sexo,imc,gordura_corporal) VALUES ('Veronica',26,89.0,1.62,'F',33.9,24.0);
INSERT INTO paciente(nome,idade,peso,altura,sexo,imc,gordura_corporal) VALUES ('Antonia',24,108.0,1.88,'F',30.6,16.0);
INSERT INTO paciente(nome,idade,peso,altura,sexo,imc,gordura_corporal) VALUES ('Luzia',42,80.0,1.70,'F',27.7,24.0);
INSERT INTO paciente(nome,idade,peso,altura,sexo,imc,gordura_corporal) VALUES ('Lidia',32,70.0,1.65,'F',25.7,23.0);
INSERT INTO paciente(nome,idade,peso,altura,sexo,imc,gordura_corporal) VALUES ('Linda',52,109.0,1.90,'F',30.2,20.0);
INSERT INTO paciente(nome,idade,peso,altura,sexo,imc,gordura_corporal) VALUES ('Giorgia',20,106.0,1.84,'F',31.3,19.0);
INSERT INTO paciente(nome,idade,peso,altura,sexo,imc,gordura_corporal) VALUES ('Graziana',33,76.0,1.63,'F',28.6,27.0);
INSERT INTO paciente(nome,idade,peso,altura,sexo,imc,gordura_corporal) VALUES ('Dafne',44,87.0,1.87,'F',24.9,30.0);
INSERT INTO paciente(nome,idade,peso,altura,sexo,imc,gordura_corporal) VALUES ('Luana',19,103.0,1.64,'F',38.3,16.0);
INSERT INTO paciente(nome,idade,peso,altura,sexo,imc,gordura_corporal) VALUES ('Rosalva',21,108.0,1.72,'F',36.5,25.0);
INSERT INTO paciente(nome,idade,peso,altura,sexo,imc,gordura_corporal) VALUES ('Rebeca',27,77.0,1.70,'F',26.6,27.0);
INSERT INTO paciente(nome,idade,peso,altura,sexo,imc,gordura_corporal) VALUES ('Palmira',34,64.0,1.64,'F',23.8,18.0);
INSERT INTO paciente(nome,idade,peso,altura,sexo,imc,gordura_corporal) VALUES ('Lucia',49,76.0,1.72,'F',27.2,28.0);
INSERT INTO paciente(nome,idade,peso,altura,sexo,imc,gordura_corporal) VALUES ('Rosalina',52,81.0,1.79,'F',25.7,19.0);
INSERT INTO paciente(nome,idade,peso,altura,sexo,imc,gordura_corporal) VALUES ('Florencia',44,66.0,1.71,'F',22.6,17.0);
INSERT INTO paciente(nome,idade,peso,altura,sexo,imc,gordura_corporal) VALUES ('Renata',54,101.0,1.74,'F',33.4,16.0);
INSERT INTO paciente(nome,idade,peso,altura,sexo,imc,gordura_corporal) VALUES ('Esmeralda',25,85.0,1.72,'F',28.7,21.0);
INSERT INTO paciente(nome,idade,peso,altura,sexo,imc,gordura_corporal) VALUES ('Mariana',34,98.0,1.85,'F',28.6,30.0);
INSERT INTO paciente(nome,idade,peso,altura,sexo,imc,gordura_corporal) VALUES ('Isadora',45,103.0,1.66,'F',37.4,20.0);
INSERT INTO paciente(nome,idade,peso,altura,sexo,imc,gordura_corporal) VALUES ('Ursula',37,90.0,1.84,'F',26.6,17.0);
INSERT INTO paciente(nome,idade,peso,altura,sexo,imc,gordura_corporal) VALUES ('Valentina',58,87.0,1.66,'F',31.6,21.0);
INSERT INTO paciente(nome,idade,peso,altura,sexo,imc,gordura_corporal) VALUES ('Carmen',23,100.0,1.60,'F',39.1,22.0);
INSERT INTO paciente(nome,idade,peso,altura,sexo,imc,gordura_corporal) VALUES ('Tamara',29,90.0,1.82,'F',27.2,17.0);
INSERT INTO paciente(nome,idade,peso,altura,sexo,imc,gordura_corporal) VALUES ('Izabel',41,95.0,1.73,'F',31.7,20.0);
INSERT INTO paciente(nome,idade,peso,altura,sexo,imc,gordura_corporal) VALUES ('Celestina',29,77.0,1.60,'F',30.1,25.0);
INSERT INTO paciente(nome,idade,peso,altura,sexo,imc,gordura_corporal) VALUES ('Raquel',42,90.0,1.76,'F',29.1,26.0);
INSERT INTO paciente(nome,idade,peso,altura,sexo,imc,gordura_corporal) VALUES ('Daniela',19,95.0,1.89,'F',26.6,25.0);
INSERT INTO paciente(nome,idade,peso,altura,sexo,imc,gordura_corporal) VALUES ('Lorena',30,72.0,1.71,'F',24.6,28.0);
INSERT INTO paciente(nome,idade,peso,altura,sexo,imc,gordura_corporal) VALUES ('Diana',51,96.0,1.85,'F',28.0,23.0);
INSERT INTO paciente(nome,idade,peso,altura,sexo,imc,gordura_corporal) VALUES ('Laura',52,81.0,1.79,'F',25.3,26.0);
INSERT INTO paciente(nome,idade,peso,altura,sexo,imc,gordura_corporal) VALUES ('Camila',49,76.0,1.64,'F',28.3,24.0);

			