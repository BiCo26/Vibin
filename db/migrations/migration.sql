

-- CREATE DATABASE sound_waves;
\c sound_waves;

DROP TABLE IF EXISTS users CASCADE;
DROP TABLE IF EXISTS sounds CASCADE;
DROP TABLE IF EXISTS sound_faves CASCADE;





CREATE TABLE IF NOT EXISTS users (
  id_users SERIAL PRIMARY KEY,
  username VARCHAR(255) UNIQUE NOT NULL,
  password_digest TEXT NOT NULL,
  firstname VARCHAR(255)
);

CREATE TABLE IF NOT EXISTS sounds (
  id SERIAL PRIMARY KEY,
  sound_wave VARCHAR(200),
  audio_url TEXT, 
  description TEXT,
  image VARCHAR(200)
);

CREATE TABLE IF NOT EXISTS sound_faves (
  user_id SERIAL REFERENCES users(id_users),
  fave_id INTEGER REFERENCES sounds(id),
  fave_name TEXT
);

-- \c seeds/seed.sql;
-- \c seeds/sounds.sql;