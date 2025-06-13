CREATE TYPE rated_type_enum AS ENUM ('car', 'agency');

CREATE TABLE "User" (
    id SERIAL PRIMARY KEY,
    lastName VARCHAR(255),
    firstName VARCHAR(255),
    email VARCHAR(255),
    password VARCHAR(255),
    dateOfBirth DATE
);

CREATE TABLE "Agency" (
    id SERIAL PRIMARY KEY,
    location VARCHAR(255),
    mail VARCHAR(255),
    phone VARCHAR(50)
);

CREATE TABLE "Car" (
    id SERIAL PRIMARY KEY,
    agencyId INT REFERENCES "Agency"(id),
    brand VARCHAR(255),
    model VARCHAR(255),
    pricePerDay DOUBLE PRECISION
);

CREATE TABLE "Rent" (
    id SERIAL PRIMARY KEY,
    userId INT REFERENCES "User"(id),
    agencyId INT REFERENCES "Agency"(id),
    carId INT REFERENCES "Car"(id),
    price DOUBLE PRECISION,
    begin DATE,
    end DATE
);

CREATE TABLE "Rate" (
    id SERIAL PRIMARY KEY,
    rate DOUBLE PRECISION,
    userId INT REFERENCES "User"(id),
    ratedType rated_type_enum,
    ratedId INT
);