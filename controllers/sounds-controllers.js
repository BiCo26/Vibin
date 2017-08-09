

const Sound = require('../models/sound');

const soundsController = {};

soundsController.index = (req, res) => {
  Sound.findAll()

    .then(sounds => {
        console.log(sounds);
      res.render('./index', {
        currentPage: 'index',
        message: 'ok',
        soundData: sounds,
      });
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

soundsController.create = (req, res) => {
  console.log(req.body);
  Sound.create({
    sound_wave: req.body.sound_wave,
    audio_url: req.body.video1, //change
    description: req.body.description,
    user_id:process.env.user_id,
  }).then(sound => {
    console.log(sound);
    res.redirect('/sounds');
  }).catch(err => {
    console.log(err);
    res.status(500).json({ err });
  });
};

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