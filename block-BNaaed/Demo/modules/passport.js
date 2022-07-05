var passport = require('passport');
var User = require('../models/users');
var GoogleStrategy = require( 'passport-google-oauth2' ).Strategy;

passport.use(new GoogleStrategy({
    clientID: process.env.CLIENT_ID,
    clientSecret: process.env.CLIENT_SECRET,
    callbackURL: "/auth/google/callback",
    passReqToCallback   : true
  }, (request, accessToken, refreshToken, profile, done) => {
    var profileData = {
        name: profile.displayName,
        email: profile.email
    }
    User.findOne({email: profile.email}, (err, user) => {
        if(err) return done(err);
        if(!user) {
            User.create(profileData, (err, addedUser) => {
                if(err) return done(err);
                return done(null, addedUser);
            })
        } else { done(null, user) };
    });
}));

passport.serializeUser((user, done) => {
    done(null, user.id);
});

passport.deserializeUser((userId, done) => {
    User.findById(userId, 'name email', function(err, user) {
        done(err, user);
    })
})