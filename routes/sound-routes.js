

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




module.exports = soundsRouter;