


CREATE TABLE IF NOT EXISTS sound_faves (
  user_id SERIAL PRIMARY KEY,
  fave_id INTEGER REFERENCES(255) UNIQUE NOT NULL,
  
);


\c sound_faves;