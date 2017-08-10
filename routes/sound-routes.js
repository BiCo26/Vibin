

const express = require('express');
const soundsRouter = express.Router();
const authHelpers = require('../services/auth/auth-helpers');
const soundsController = require('../controllers/sounds-controllers');

soundsRouter.get('/', soundsController.index);
soundsRouter.get('/userFaves', soundsController.soundFaveIndex  );
//////
soundsRouter.post('/add', soundsController.create);

soundsRouter.get('/add',  (req, res) => {
  res.render('./index', {
    currentPage: 'add',
  });
});

// soundsRouter.post('/add', soundsController.create);

// soundsRouter.get('/add', (req, res) => {
//   res.render('sounds/sounds-add', {
//     currentPage: 'add',
//   });
// });

// soundsRouter.get('/:id', soundsController.show);
// soundsRouter.get('/:id/edit', authHelpers.loginRequired, soundsController.edit);
// soundsRouter.put('/:id', authHelpers.loginRequired, soundsController.update);
// soundsRouter.put('/:id/complete', authHelpers.loginRequired, soundsController.complete);
// soundsRouter.delete('/:id', authHelpers.loginRequired, soundsController.delete);


module.exports = soundsRouter;