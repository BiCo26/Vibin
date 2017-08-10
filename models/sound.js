
//MODELS !!!

const db = require('../db/config');

const Sound = {};

//ALL FUNCTION BELOW are METHODS inside the ^above^ Sound object {}

Sound.findAll =  function(){
  //I WANT ALL SOUNDs IN MY INDEX
  return db.query(` SELECT * FROM sounds`);
};

//query is many // one is one!!!

Sound.findById = function(id) {
  return db.one(
    `SELECT * FROM sounds WHERE id = $1`,
   [id]);
};
                            //param is a var PICK any name
Sound.findAllFaves = function(userId){
  return db.query(`
  SELECT F.* ,s.description,s.audio_url FROM sound_faves F  inner join sounds s on s.id=f.fave_id WHERE F.user_id = $1`,
  [userId])
}


Sound.create = function(faves) {
  console.log(faves);
  return db.one(`
    INSERT INTO sound_faves(user_id, fave_id, fave_name) VALUES ($1, $2, $3) RETURNING *`,
     [faves.user_id, faves.fave_id, faves.fave_description]);
};


Sound.update = (faves, faveId) => {
  return db.one(`
    UPDATE sound_faves SET fave_name = $1 WHERE fave_id = $2 RETURNING *`,
     [faves.fave_name, faveId]); ///////////
};

Sound.delete = (id) => {
  return db.none(`
    DELETE FROM sound_faves WHERE id = $1`,
     [id])
}


module.exports = Sound;