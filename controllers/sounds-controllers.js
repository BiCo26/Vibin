

const Sound = require('../models/sound');

const soundsController = {};

soundsController.index = (req, res) => {
  console.log("Im here");
  Sound.findAll()
    .then(sound => {
      console.log(sound);
      res.render('./index', {
        currentPage: 'index',
        message: 'Wave List ',
        subTitle: 'Im the the controller ',
        soundData: sound,
      });
    }).catch(err => {
      console.log(err);
      res.status(500).json({ err });
    });
};

soundsController.soundFaveIndex = (req, res) => {
  console.log('fAVES');
  Sound.findAllFaves(process.env.user_id) 
  .then(sound => {
    console.log(sound);
    res.render('./sounds/sound-fave-index', {
      currentPage: 'sound-fave-index',
      message: 'List of favs',
      subTitle: 'Im in the constroller',
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
// soundsController.show = (req, res) => {
//   Sound.findById(req.params.id)
//     .then(sound => {
//       res.render('sounds/sound-single', {
//         soundData: sound,
//       })
//     }).catch(err => {
//       console.log(err);
//       res.status(500).json({ err });
//     });
// }

// // sound_wave, audio_url, description, image



// //app.get("/", function(req,res){
// //   res.render("index",{
// //     message:'',
// //     currentPage:'',
// //     subTitle:'',
    
// //   })
// // })

// soundsController.get = (req, res) => {
//   Sound.findById(req.params.)
//   res.render('sounds/sound-index', {
//           currentPage: 'index',
//           message: 'ok',
//           soundData: sounds,
//         });
//       }).catch(err => {
//         console.log(err);
//         res.status(500).json({ err });
//       })
  
//   };



// //CHECK SOUND-SINGLE-EDIT
// soundsController.edit = (req, res) => {
//   Sound.findById(req.params.id)
//     .then(sound => {
//       res.render('sounds/sound-edit', {
//         soundData: sound,
//       })
//     }).catch(err => {
//     console.log(err);
//     res.status(500).json({ err });
//   });
// }

// //sound_wave, audio_url, description, image



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