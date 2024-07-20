CREATE DATABASE bookDB;

USE bookDB;

SHOW tables;

-- Creando tabla Usuario
drop table if exists usuario;
CREATE TABLE usuario (
	id_usuario int not null auto_increment,
	nombre varchar(50),
	usuario varchar(50),
	password varchar(32),
	constraint PK_id_usuario primary key (id_usuario)
);

-- Creando la tabla libros
drop table if exists libro;
CREATE TABLE libro(
	id_libro int not null auto_increment,
	titulo varchar(100),
	sinopsis text,
	genero text,
	calificacion tinyint(10),
	autores text,
	portada text,
	constraint PK_id_libro primary key (id_libro)
);

-- Creando tabla Calificar
drop table if exists calificar;
CREATE TABLE calificar(
	id_calificar int not null auto_increment,
	id_usuario int,
	id_libro int,
	interes bool,
	estrellas tinyint,
	leido bool,
	constraint PK_id_calificar primary key (id_calificar),
	constraint FK_usuario_calificar foreign key (id_usuario) references usuario(id_usuario),
	constraint FK_libro_calificar foreign key (id_libro) references libro(id_libro)
);

-- Creando vista para ver el perfil del usuario y sus gustos
create view interes_usuario AS select 
	cal.id_usuario, lib.genero, lib.autores 
from calificar as cal inner join libro as lib
on cal.id_libro = lib.id_libro;
