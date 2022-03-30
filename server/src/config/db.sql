CREATE TABLE sellers (
    id SERIAL PRIMARY KEY, 
    fullname TEXT NOT NULL, 
    email TEXT NOT NULL UNIQUE,
    password TEXT NOT NULL,
);

CREATE TABLE user (
    userid SERIAL PRIMARY KEY,
    fullname TEXT NOT NULL,
    email TEXT NOT NULL UNIQUE,
    password TEXT NOT NULL
);

CREATE TABLE userInfo (
    id SERIAL PRIMARY KEY,
    tel INT,
    address TEXT,
    city VARCHAR(255),
    userid INTEGER REFERENCES users(userid),
);

CREATE TABLE products (
    productid SERIAL PRIMARY KEY,
    productname TEXT NOT NULL,
    description TEXT ,
    quantity INTEGER ,
    price TEXT NOT NULL,
    image TEXT NOT NULL,
    sellerid INTEGER REFERENCES sellers(id),
    categoryid INTEGER REFERENCES categories(id),
    subcategoryid INTEGER REFERENCES subcategories(id),
	
);

CREATE TABLE categories (
    id SERIAL PRIMARY KEY,
    name TEXT NOT NULL,
);

CREATE TABLE subcategories (
    id SERIAL PRIMARY KEY,
    name TEXT NOT NULL,
    categoryid INTEGER REFERENCES categories(id),
);

CREATE TABLE orders(
    id SERIAL PRIMARY KEY,
    total FLOAT,
    quantity INT,
    userid INTEGER REFERENCES users(id),
    productid INTEGER REFERENCES products(id),
);


CREATE TABLE usersvsproducts (
    userid INTEGER NOT NULL REFERENCES users(id),
    productid INTEGER NOT NULL REFERENCES products(id)
);

