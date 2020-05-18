const express = require('express');
const db = require('../models');

const router = express.Router();

// get Route to get all posts, should be in order of latest to oldest
router.get('/api/post', (req, res) => {
    db.Post.find().sort({ timestamp: -1 })
    .then((posts) => {
        res.status(200).json(posts);
    });
});

// Create a new post
// New post consist of:
    // authorId = r.b.authorId, Empty comments list, empty likers list,
    // likesCount = 0, text = r.b.text, timestamp = new Date().now()
router.post('/api/post', (req, res) => {
    const newPost = new db.Post({
        authorId: req.body.authorId,
        text: req.body.text,
        comments: [],
        likers: [],
        likesCount: 0,
        timeStamp: new Date().getTime(),
    });
    newPost.save()
    .then((post) => {
        res.status(201).json(post);
    }).catch((err) => {
        res.status(400).send("Failed to Post")
    });
});

// Delete route deletes the post of a specified user
router.delete('/api/:id', (req,res) => {
    db.Post.findById(req.params.id)
    .then((post) => {
        post.remove();
        res.json({ success: true });
    }).catch((err) => {
        res.status(404).send("Failed to delete");
    });
});

// Patch route to update posts
// The following things can happend for when updating
    // Only the owner can update their post
    // 

module.exports = router;