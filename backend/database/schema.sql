DROP DATABASE IF EXISTS ararat_autoDB;
CREATE DATABASE ararat_autoDB;
USE ararat_autoDB;

DROP USER IF EXISTS
'ararat_autoAdminUser'@'localhost';

CREATE USER 'ararat_autoAdminUser'@'localhost'
IDENTIFIED WITH mysql_native_password BY 'MyPassword1!';

GRANT ALL PRIVILEGES ON ararat_autoDB.* TO 
'ararat_autoAdminUser'@'localhost';

DROP TABLE IF EXISTS users;
DROP TABLE IF EXISTS cars;
DROP TABLE IF EXISTS images;

CREATE TABLE users (
    id integer PRIMARY KEY AUTO_INCREMENT,
    username VARCHAR(255) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL
);

CREATE TABLE cars (
    id INTEGER PRIMARY KEY AUTO_INCREMENT,
    user_id INTEGER NOT NULL,
    title VARCHAR(255) NOT NULL,
    description VARCHAR(1000) NOT NULL,
    price DECIMAL NOT NULL, 
    stock_num INTEGER NOT NULL,
    created TIMESTAMP NOT NULL DEFAULT NOW(),
    FOREIGN KEY (user_id) REFERENCES users(id)
);

CREATE TABLE images (
    id INTEGER PRIMARY KEY AUTO_INCREMENT,
    car_id INTEGER NOT NULL, 
    file_path VARCHAR(255) NOT NULL, 
    created TIMESTAMP NOT NULL DEFAULT NOW(),
    FOREIGN KEY (car_id) REFERENCES cars(id)
);