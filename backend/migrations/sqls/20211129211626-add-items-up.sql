CREATE TABLE items (
    id INT(6) AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(50) NOT NULL,
    description VARCHAR(200) NOT NULL,
    photoUrl VARCHAR(250) NOT NULL,
    optUrl1 VARCHAR(250),
    optUrl2 VARCHAR(250),
    optUrl3 VARCHAR(250),
    optUrl4 VARCHAR(250),
    optUrl5 VARCHAR(250),
    price INT,
    status VARCHAR(30) DEFAULT "sellable",
    createdAt INT NOT NULL,
    sellerName VARCHAR(50) NOT NULL,
    sellerId INT(6) NOT NULL,
    FOREIGN KEY (sellerId) REFERENCES users (id) ON DELETE CASCADE
);