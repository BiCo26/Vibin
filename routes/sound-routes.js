

const express = require('express');
const soundsRouter = express.Router();

const authHelpers = require('../services/auth/auth-helpers');
const soundsController = require('../controllers/sounds-controller');

soundsRouter.get('/', authHelpers.loginRequired, todosController.index);
soundsRouter.post('/', authHelpers.loginRequired, todosController.create);

soundsRouter.get('/new', authHelpers.loginRequired, (req, res) => {
  res.render('sounds/sounds-add');
});

soundsRouter.get('/:id', authHelpers.loginRequired, todosController.show);
soundsRouter.get('/:id/edit', authHelpers.loginRequired, todosController.edit);
soundsRouter.put('/:id', authHelpers.loginRequired, todosController.update);
soundsRouter.put('/:id/complete', authHelpers.loginRequired, todosController.complete);
soundsRouter.delete('/:id', authHelpers.loginRequired, todosController.delete);


module.exports = soundsRouter;