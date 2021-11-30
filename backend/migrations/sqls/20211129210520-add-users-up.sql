CREATE TABLE users (
    id INT(6) AUTO_INCREMENT PRIMARY KEY,
    userName VARCHAR(50) NOT NULL,
    password VARCHAR(200) NOT NULL,
    registrateAt INT NOT NULL,
    status VARCHAR(30) DEFAULT "pending"
);