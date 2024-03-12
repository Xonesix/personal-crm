CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(255) NOT NULL,
    username VARCHAR(15) NOT NULL,
    password VARCHAR(20) NOT NULL
);
CREATE TABLE people
(
    id SERIAL PRIMARY KEY,
    userid INTEGER NOT NULL,
    name VARCHAR(100) NOT NULL,
    status INTEGER NOT NULL,
    age INTEGER,
    dob DATE,
    occupation TEXT,
    phone VARCHAR(15),
    description TEXT,
    FOREIGN KEY (userid) REFERENCES users(id) ON DELETE CASCADE
);
CREATE TABLE interactions (
    id SERIAL PRIMARY KEY,
    userid INTEGER NOT NULL,
    date_of DATE NOT NULL,
    location VARCHAR(300), -- Renamed from 'located'
    remind BOOLEAN NOT NULL,
    status INTEGER,
    description TEXT,
    FOREIGN KEY (userid) REFERENCES users(id) ON DELETE CASCADE
);
CREATE TABLE people_interactions(
    -- many to many relationship intemediary table
    id SERIAL PRIMARY KEY,
    peopleid INTEGER NOT NULL, -- one to many 1 people ->  many people_interactions
    interactionid INTEGER NOT NULL, -- many to one  many peopleinteractions -> one interactions
    FOREIGN KEY (peopleid) REFERENCES people(id) ON DELETE CASCADE,
    FOREIGN KEY (interactionid) REFERENCES interactions(id) ON DELETE CASCADE
);

-- Insert User
INSERT INTO users (name, email, username, password) 
VALUES ('Test User', 'test@example.com', 'testuser', 'password123');

-- Get latest Interactions
SELECT *
FROM interactions
WHERE userid = 1
ORDER BY date_of DESC;

-- Select People Of Users
SELECT * FROM people WHERE userid = 1

-- Get interactions of A Person
SELECT *
FROM people_interactions
INNER JOIN people 
    ON people_interactions.peopleid = people.id
INNER JOIN interactions
    ON people_interactions.interactionid = interactions.id
WHERE people_interactions.peopleid = 1;

-- Specific Columns
SELECT interactions.description AS interaction_description,
       people.name AS person_attending_name,
       users.name AS user_name
FROM people_interactions
INNER JOIN people 
    ON people_interactions.peopleid = people.id
INNER JOIN interactions
    ON people_interactions.interactionid = interactions.id
INNER JOIN users
    ON people.userid = users.id
WHERE people_interactions.peopleid = 1;

-- Get People in an Interactions
