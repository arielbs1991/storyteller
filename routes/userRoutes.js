const router = require('express').Router();
const User = require('../models/User.js');

//all routes on this page start with /api/users

//create new user
router.post('/', (req, res) => {
    User.create(req.body)
        // User.save()
        .then(dbUser => {
            res.json(dbUser)
        })
        .catch(err => {
            res.status(400).json(err);
        });
});

//retrieve user by username
router.get('/:username', (req, res) => {
    // router.get('/', (req, res) => {
    User.findOne({
        username: req.params.username
        //    'username': req.session.user.username
    })
        .then(dbUser => {
            res.json(dbUser)
        })
        .catch(err => {
            res.status(400).json(err);
        });
});

//update number of stories
router.put('/storiesCreated/:username', (req, res) => {
    User.updateOne(
        { username: req.params.username },
        { $set: { storiesCreated: req.body.storiesCreated } }
    )
        .then(user => {
            res.json(user);
        })
        .catch(err => {
            res.status(400).json(err);
        })
});

//update number of contributions
router.put('/contributions/:username', (req, res) => {
    User.updateOne(
        { username: req.params.username },
        { $set: { contributions: req.body.contributions } }
    )
        .then(user => {
            res.json(user);
        })
        .catch(err => {
            res.status(400).json(err);
        })
});

//update how many users have favorited this user
router.put('/favorited/:username', (req, res) => {
    User.updateOne(
        { username: req.params.username },
        { $set: { favorited: req.body.favorited } }
    )
        .then(user => {
            res.json(user);
        })
        .catch(err => {
            res.status(400).json(err);
        })
});

module.exports = router;