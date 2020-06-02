const friends = require('../data/friends');
const server = require('../../server');

module.exports = function(app){
    let user;
    app.post("/api/friends", function (req, res) {
        module.exports.user = req.body;
        friends.array.push(req.body);
        console.log(`${req.body.name} successfully added!`)
        res.json({});
    });
    app.get("/bestfriend", function (req, res) {
        let bestfriend = server.lookingForFriends();
        res.json(bestfriend);
    });
    app.get("/api/:friends?", function(req, res){
        res.json(friends.array);
    });
}