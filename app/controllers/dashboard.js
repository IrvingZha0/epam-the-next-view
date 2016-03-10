'use strict';

exports.get = function(req, res) {

  res.render('dashboard', {
      stuff: [{
        greeting: "Hi",
        subject: "Yooooooooooooooo!"
    }],
    user: req.user
    });

}