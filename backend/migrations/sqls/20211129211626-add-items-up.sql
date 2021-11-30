CREATE TABLE items (
    id INT(6) AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(50) NOT NULL,
    description VARCHAR(200) NOT NULL,
    photoUrl VARCHAR(250) NOT NULL,
    price INT,
    status VARCHAR(30) DEFAULT "pending",
    createdAt INT NOT NULL,
    userId INT(6) NOT NULL,
    FOREIGN KEY (userID) REFERENCES users (id) ON DELETE CASCADE
);