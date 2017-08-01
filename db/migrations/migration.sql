



CREATE DATABASE IF NOT EXISTS sound_waves;
\c sound_waves;

\c migrations/migration2.sql;
\c migrations/migration3.sql;

CREATE TABLE IF NOT EXISTS sounds (
  id SERIAL PRIMARY KEY,
  user_id INTEGER REFERENCES users(id) null,
  sound_wave VARCHAR(200),
  description TEXT,
  image VARCHAR(200)
  
);

\c seeds/seed.sql;
\c seeds/TO_DO.sql;