CREATE TABLE "paciente" ( 
    `idpaciente` INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT UNIQUE, 
    `nome` TEXT NOT NULL, `idade` INTEGER NOT NULL, 
    `peso` FLOAT NOT NULL, `altura` FLOAT NOT NULL, 
    `imc` FLOAT NOT NULL, 
    `gordura_corporal` FLOAT NOT NULL );