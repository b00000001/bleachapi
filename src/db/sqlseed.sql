DROP DATABASE IF EXISTS bleachAPI;

CREATE DATABASE bleachAPI;

USE bleachAPI;

CREATE TABLE bleachchars (
    id INT NOT NULL AUTO_INCREMENT,
    title VARCHAR(30),
    characterquote VARCHAR(30),
    image VARCHAR(40),
    description VARCHAR(30),
    race VARCHAR(30),
    birthday DATETIME,
    gender VARCHAR(10),
    height VARCHAR(40),
    weight VARCHAR(10),
    occupation VARCHAR(100),
    affiliation VARCHAR(100),
    profession VARCHAR(80),
    previousposition VARCHAR(80),
    previousdivision VARCHAR(80), 
    previouspartner VARCHAR(30),
    baseofoperations VARCHAR(80),
    shikai VARCHAR(80),
    bankai VARCHAR(80),
    powersandabilities VARCHAR(5000),
    plot VARCHAR(5000),
    appearance VARCHAR(5000),  
    created_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
    PRIMARY KEY (id),
    );


