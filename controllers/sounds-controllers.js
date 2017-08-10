

const Sound = require('../models/sound');

const soundsController = {};

soundsController.index = (req, res) => {
  console.log("Index");
  Sound.findAll()
    .then(sound => {
      console.log(sound);
      res.render('./index', {
        currentPage: 'index',
        message: 'Wave List ',
        subTitle: ' ',
        soundData: sound,
      });
    }).catch(err => {
      console.log(err);
      res.status(500).json({ err });
    });
};

soundsController.soundFaveIndex = (req, res) => {
  console.log('Faves');
  Sound.findAllFaves(process.env.user_id) 
  .then(sound => {
    console.log(sound);
    res.render('./sounds/sound-fave-index', {
      currentPage: 'sound-fave-index',
      message: 'List of Favorites',
      subTitle: '',
      soundData: sound,
    });
  }).catch(err => {
    console.log(err);
    res.status(500).json({err});
  });
};

soundsController.create = (req, res) => {  
  Sound.create({
    fave_id: req.body.id,
    fave_wave: req.body.sound_wave,
    fave_url: req.body.audio_url, //change
    fave_description: req.body.description,
    user_id:process.env.user_id,
  }).then(sound => {
    console.log(sound);
    res.redirect('/sounds');
  }).catch(err => {
    console.log(err);
    res.status(500).json({ err });
  });
};



soundsController.delete = (req, res) => {
  Sound.destroy(req.params.id)
    .then(() => {
      res.redirect('/sounds');
    }).catch(err => {
    console.log(err);
    res.status(500).json({ err });
  });
}



module.exports = soundsController;