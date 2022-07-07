var User = require('../models/users');


module.exports = {
    loggedInUser: (req, res, next) => {
        if( req.session && req.session.userId) {
            next();
        }
        if(req.session.passport.user) {
            next()
        }else {
            res.redirect('/users/login');
        }
    },
    userInfo: (req, res, next) => {
        var user = req.session && req.session.passport.user;
        if(userId) {
            User.findOne({" name": req.body.displayName} , (err, user) => {
                if(err) return next(err);
                req.user = user;
                res.locals.user = user;
                next();
            });
        }else {
            req.user = null;
            res.locals.user = null;
            next();
        };
    }
};