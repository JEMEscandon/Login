DROP DATABASE IF EXISTS bookDB;
CREATE DATABASE bookDB;
USE bookDB;

SHOW TABLES;

-- USE bookDB;

-- Creando la tabla CATEGORIA
DROP TABLE IF EXISTS Categoria;
CREATE TABLE Categoria(
	Id_categoria INT NOT NULL AUTO_INCREMENT,
	Categoria VARCHAR(50),
	Descripcion VARCHAR(250),
	CONSTRAINT PK_id_categoria PRIMARY KEY (Id_categoria)
);

-- Creando tabla USUARIO
DROP TABLE IF EXISTS Usuario;
CREATE TABLE Usuario (
	Id_usuario VARCHAR(32) NOT NULL,
	Consecutivo INT NOT NULL,
	Nombre VARCHAR(50),
	Usuario VARCHAR(50),
	Contrasenia VARCHAR(32),
	CONSTRAINT PK_id_usuario PRIMARY KEY (Id_usuario)
);

-- Creando la tabla LIBROS
DROP TABLE IF EXISTS Libro;
CREATE TABLE Libro(
	Id_libro VARCHAR(32) NOT NULL,
	Consecutivo INT NOT NULL,
	Titulo VARCHAR(100),
	Sinopsis TEXT,
	Genero TEXT,
	Calificacion TINYINT(10),
	Autores TEXT,
	Portada TEXT,
	CONSTRAINT PK_id_libro PRIMARY KEY (Id_libro)
);

-- Creando tabla CALIFICAR
DROP TABLE IF EXISTS Calificar;
CREATE TABLE Calificar(
	Id_calificar INT NOT NULL AUTO_INCREMENT,
	Id_usuario VARCHAR(32),
	Id_libro VARCHAR(32),
	Interes BOOL,
	Estrellas TINYINT,
	Leido BOOL,
	CONSTRAINT PK_id_calificar PRIMARY KEY (Id_calificar),
	CONSTRAINT FK_usuario_calificar FOREIGN KEY (Id_usuario) REFERENCES Usuario(Id_usuario),
	CONSTRAINT FK_libro_calificar FOREIGN KEY (Id_libro) REFERENCES Libro(Id_libro)
);

-- Creando la tabla Biblioteca
DROP TABLE IF EXISTS Biblioteca;
CREATE TABLE Biblioteca(
	Id_biblioteca INT NOT NULL AUTO_INCREMENT,
	Id_categoria INT,
	Id_libro VARCHAR(32),
	Id_usuario VARCHAR(32),
	CONSTRAINT PK_id_biblioteca PRIMARY KEY (Id_biblioteca),
	CONSTRAINT FK_categoria_biblioteca FOREIGN KEY (Id_categoria) REFERENCES Categoria(Id_categoria),
	CONSTRAINT FK_libro_biblioteca FOREIGN KEY (Id_libro) REFERENCES Libro(Id_libro),
	CONSTRAINT FK_usuario_biblioteca FOREIGN KEY (Id_usuario) REFERENCES Usuario(Id_usuario)
);

-- Creando vista para ver el perfil del usuario y sus gustos
/* 
CREATE VIEW interes_usuario AS SELECT 
	cal.id_usuario, lib.genero, lib.autores 
FROM calificar AS cal INNER JOIN libro AS lib
ON cal.id_libro = lib.id_libro;
*/