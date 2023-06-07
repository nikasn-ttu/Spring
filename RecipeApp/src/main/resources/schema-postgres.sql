DROP TABLE IF EXISTS Recipe_product;
DROP TABLE IF EXISTS Recipe;
DROP TABLE IF EXISTS Product;
DROP TABLE IF EXISTS Type;

CREATE TABLE Recipe (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    description VARCHAR(255),
    published_on TIMESTAMP NOT NULL,
    updated_on TIMESTAMP
);

CREATE TABLE Product(
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    description VARCHAR(255)
);

CREATE TABLE Type(
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    name VARCHAR(255) NOT NULL
);

CREATE TABLE Recipe_product(
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    recipe_id UUID NOT NULL,
    product_id UUID NOT NULL,
    type_id UUID NOT NULL,
    amount DECIMAL NOT NULL,
    foreign key (recipe_id) references Recipe(id),
    foreign key (product_id) references Product(id),
    foreign key (type_id) references Type(id)
);
