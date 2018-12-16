CREATE DATABASE bamazon;
USE bamazon;

CREATE TABLE products (
item_id INT(11) auto_increment NOT NULL,
product_name VARCHAR(45) NOT NULL,
department_name VARCHAR(30) NOT NULL,
price DECIMAL(10,2) NOT NULL,
stock_quantity INT(11) NOT NULL,
PRIMARY KEY (item_id)
);
