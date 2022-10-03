// everytime user goes to any url in app
// ensureLoggedIn will run below function and check if user is authorized

module.exports = function(req, res, next) {
    // Status code of 401 is Unauthorized
    if (!req.user) return res.status(401).json('Unauthorized');
    // A okay, go to next url
    next();
  };