const express = require('express');
const db = require('../models');
const { ObjectID } = require('mongodb');

const router = express.Router();

// get Route to get all posts, should be in order of latest to oldest
router.get('/api/post', (req, res) => {
    db.Post.find().populate("authorId", "username").sort({ timestamp: -1 })
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
router.delete('/api/post/:id', (req,res) => {
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
    // Update based on a specific action:
        // Could be adding likes
        // adding comments
        // editing
router.patch('/api/post/:id', (req, res) => {
    // id is the _id of the post
    const { id } = req.params;
    if(!ObjectID.isValid(id)) {
        res.status(404).send('Invalid id');
    }
    // For add Comment, we need:
    // {                    CommenterId is the user posting comment
    //     "commenterId": "5ec2281fa0b9cf23e0049cd1",
    //     "text": "this is sample text"
    //     "updateAction": "addComment"
    //  }
    else if(req.body.updateAction === 'addComment') {
        console.log(req.body);
        db.Post.findByIdAndUpdate(
            id,
            {
              $push: {
                comments: {
                  commenterId: req.body.commenterId,
                  commenterName: req.body.commenterName,
                  text: req.body.text,
                  timestamp: new Date().getTime()
                }
              }
            },
            { new: true },
            (err, post) => {
              if (err) {
                  res.status(400).send(err);
              }
              res.send(post);
            }
        );
    }
    // For delete comment, we need:
    // {                Comment id is the id of the comment
    //     "commentId": "5ec2281fa0b9cf23e0049cd1",
    //     "updateAction": "deleteComment"
    //  }
    else if(req.body.updateAction === 'deleteComment') {
        db.Post.findByIdAndUpdate(
            id,
            {
              $pull: {
                comments: {
                  _id: req.body.commentId
                }
              }
            },
            { new: true },
            (err, post) => {
              if (err) {
                  res.status(400).send(err);
              }
              res.send(post);
            }
        );
    }
    // {
    //     "commentId": "5ec22875b7a0e036d8d628a6",
    //     "text": "this is a comment",
    //     "updateAction": "editComment"
    // }
    else if(req.body.updateAction === 'editComment') {
        db.Post.findById(id, (err, post) => {
            const { comments } = post;
            const theComment = comments.find(comment => 
                comment._id.equals(req.body.commentId)
            );
            if (!theComment) {
                res.status(404).send('Unable to find comment');
            }
            theComment.text = req.body.text;
    
            post.save((err) => {
                if (err) {
                    res.status(500).send(err);
                }
                res.status(200).send(post);
            });
        });
    }
    // {        id is the user liking the post
    //     "id": "5ec22c48247b5f22882fee04",
    //     "updateAction": "like"
    // }
    else if(req.body.updateAction === "like") {
        db.Post.findByIdAndUpdate(
            id,
            {
                $inc: { likesCount: 1 },
                $addToSet: { likers: req.body.id }
            },
            { new: true },
            (err, post) => {
                if (err) {
                    res.status(400).send(err)
                };
                res.send(post);
            }
        );
    }
    // {
    //     "id": "5ec22c48247b5f22882fee04",
    //     "updateAction": "unlike"
    // }
    else if(req.body.updateAction === "unlike") {
        db.Post.findByIdAndUpdate(
            id,
            {
                $inc: { likesCount: -1 },
                $pull: { likers: req.body.id }
            },
            { new: true },
            (err, post) => {
                if (err) {
                    res.status(400).send(err)
                };
                res.send(post);
            }
        );
    }
    // {
    //     "text": "We are editing the post"
    // }
    else {
        db.Post.findByIdAndUpdate(
            id,
            { $set: { text: req.body.text } },
            { new: true },
            (err, post) => {
                if (err) {
                    res.status(400).send(err)
                };
                res.send(post);
            }
        );
    }
});

module.exports = router;