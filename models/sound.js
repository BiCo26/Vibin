const db = require('../db/config');

const Sound = {};

Sound.findAll = (id) => {
  return db.query(`
    SELECT * FROM sounds
    WHERE user_id = $1
  `, [id]);
};

// sound_wave, audio_url, description, image (USER_ID???)

Sound.create = (sound) => {
  return db.one(`
    INSERT INTO sounds
    (sound_wave, audio_url, description, image, user_id) 
    VALUES ($1, $2, $3, false, $4)
    RETURNING *
  `, [sound.sound_wave, sound.audio_url, sound.description, sound.user_id]);
};

//CHECK ID
Sound.findById = (id) => {
  return db.oneOrNone(`
  SELECT * FROM sounds
  WHERE id = $1
  `, [id]);
};

Sound.update = (sound, id) => {
  return db.one(`
    UPDATE sounds SET
    sound_wave = $1,
    audio_url = $2,
    description = $3,
    user_id = $5
    WHERE id = $6
    RETURNING *
  `, [sound.sound_wave, sound.audio_url, sound.description, sound.completed, sound.user_id, id]); ///////////
};

Sound.destroy = (id) => {
  return db.none(`
    DELETE FROM sounds
    WHERE id = $1
  `, [id])
}

Sound.complete = (id) => {  /////////////////
  return db.oneOrNone(`
  UPDATE sounds SET
  completed = true 
  WHERE id = $1
  `, [id]);
}

module.exports = Sound;