

-- CREATE DATABASE sound_waves;
\c sound_waves;


CREATE TABLE IF NOT EXISTS users (
  id_users SERIAL PRIMARY KEY,
  username VARCHAR(255) UNIQUE NOT NULL,
  password_digest TEXT NOT NULL,
  firstname VARCHAR(255)
);

CREATE TABLE IF NOT EXISTS sounds (
  id SERIAL PRIMARY KEY,
  user_id INTEGER REFERENCES users(id_users) null,
  sound_wave VARCHAR(200),
  audio_url TEXT, 
  description TEXT,
  image VARCHAR(200)
);

CREATE TABLE IF NOT EXISTS sound_faves (
  user_id SERIAL PRIMARY KEY,
  fave_id INTEGER
);


\c seeds/seed.sql;
\c seeds/sounds.sql;