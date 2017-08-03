

const Sound = require('../models/sound');

const soundsController = {};

soundsController.index = (req, res) => {
  Sound.findAll(req.user.id)
    .then(todos => {
      res.render('sounds/sound-index', {
        data: sounds,
      });
    }).catch(err => {
      console.log(err);
      res.status(500).json({ err });
    });
};

soundsController.show = (req, res) => {
  Sound.findById(req.params.id)
    .then(sound => {
      res.render('sounds/sound-single', {
        sound: sound,
      })
    }).catch(err => {
      console.log(err);
      res.status(500).json({ err });
    });
}

// sound_wave, audio_url, description, image

soundsController.create = (req, res) => {
  Sound.create({
    sound_wave: req.body.sound_wave,
    audio_url: req.body.audio_url,
    description: req.body.description,
    user_id: req.user.id,

  }).then(sound => {
    console.log(sound);
    res.redirect('/sounds');
  }).catch(err => {
    console.log(err);
    res.status(500).json({ err });
  });
};

//CHECK SOUND-SINGLE-EDIT
soundsController.edit = (req, res) => {
  Sound.findById(req.params.id)
    .then(sound => {
      res.render('sounds/sound-edit', {
        todo: todo,
      })
    }).catch(err => {
    console.log(err);
    res.status(500).json({ err });
  });
}

//sound_wave, audio_url, description, image

soundsController.update = (req, res) => {
  Sound.update({
    sound_wave: req.body.sound_wave,
    audio_url: req.body.audio_url,
    description: req.body.description,
    //check "completed"
    completed: req.body.completed, ////////////////
    user_id: req.user.id,
  }, req.params.id).then(sound => {
    res.redirect('/sounds');
  }).catch(err => {
    console.log(err);
    res.status(500).json({ err });
  });
}

soundsController.delete = (req, res) => {
  Sound.destroy(req.params.id)
    .then(() => {
      res.redirect('/sounds');
    }).catch(err => {
    console.log(err);
    res.status(500).json({ err });
  });
}

soundsController.complete = (req, res) => {
  Sound.complete(req.params.id)
    .then(sound => {
      res.json({
        message: 'Favorite removed',
      })
    }).catch(err => {
    console.log(err);
    res.status(500).json({ err });
  });
}

module.exports = soundsController;