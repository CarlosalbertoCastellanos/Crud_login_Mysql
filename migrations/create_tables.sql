CREATE TABLE smartphoneUser(
    id int(11) NOT NULL,
    username varchar(120) NOT NULL,
    password varchar(120) NOT NULL,
    fullName varchar(50)  NOT NULL
);

ALTER TABLE smartphoneUser ADD PRIMARY KEY (id);

ALTER TABLE smartphoneUser
MODIFY id INT(11) NOT NULL AUTO_INCREMENT;


CREATE TABLE smartphone(
    id INT(11) NOT NULL AUTO_INCREMENT,
    nombre VARCHAR(50) NOT NULL,
    marca VARCHAR(50) NOT NULL,
    precio DECIMAL(10, 2) NOT NULL,
    imagen VARCHAR(255),
    descripcion TEXT,
    user_id INT(11),
    create_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY (id),
    FOREIGN KEY (user_id) REFERENCES smartphoneUser(id)
);