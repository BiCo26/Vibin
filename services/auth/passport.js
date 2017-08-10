

const passport = require('passport');
const User = require('../../models/user');

module.exports = () => {
  passport.serializeUser((user, done) => {
    done(null, user.username);
  });

  passport.deserializeUser((username, done) => {
    User.findByUserName(username)
      .then(user => {
        console.log(user);
        process.env.user_id = user.id_users;
        done(null, user);
      }).catch(err => {
        done(err, null);
      });
  });
};