

const express = require('express');
const soundsRouter = express.Router();

const authHelpers = require('../services/auth/auth-helpers');
const soundsController = require('../controllers/sounds-controllers');

soundsRouter.get('/', authHelpers.loginRequired, soundsController.index);
soundsRouter.post('/', authHelpers.loginRequired, soundsController.create);

soundsRouter.get('/new', authHelpers.loginRequired, (req, res) => {
  res.render('sounds/sounds-add');
});

soundsRouter.get('/:id', authHelpers.loginRequired, soundsController.show);
soundsRouter.get('/:id/edit', authHelpers.loginRequired, soundsController.edit);
soundsRouter.put('/:id', authHelpers.loginRequired, soundsController.update);
soundsRouter.put('/:id/complete', authHelpers.loginRequired, soundsController.complete);
soundsRouter.delete('/:id', authHelpers.loginRequired, soundsController.delete);


module.exports = soundsRouter;