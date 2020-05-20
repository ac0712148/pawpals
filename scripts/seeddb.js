const mongoose = require("mongoose")
const db = require("../models")

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/appDB");

const fakeUser = [
    {
        username: "test1",
        email: "test1@test.com",
        password: "1234"
    }, {
        username: "test2",
        email: "test2@test.com",
        password: "1234"
    }
];
const fakePost = [
    {
        text: "This is a sample text",
        comments: [],
        likers: [],
        likesCount: 0,
        timeStamp: new Date().getTime()
    }, {
        text: "This is a sample text2",
        comments: [],
        likers: [],
        likesCount: 0,
        timeStamp: new Date().getTime()
    }, {
        text: "This is a sample text3",
        comments: [],
        likers: [],
        likesCount: 0,
        timeStamp: new Date().getTime()
    }
];

function createUserandPosts(user, posts) {
    const userDoc = new db.User(user)

    return userDoc
        .save()
        .then(() => db.Post.create(posts.map((p) => {
            p.authorId = userDoc._id
            return p;
        })))
}
db
    .Post
    .remove({})
    .then(() => db.User.remove({}))
    .then(() => Promise.all([
        createUserandPosts(fakeUser[0], fakePost.slice(0, 2)),
        createUserandPosts(fakeUser[1], fakePost.slice(2))
    ]))
    .then(() => {
        console.log("Created Users and Posts")
        process.exit(0);
    })
    .catch(err => {
        console.log(err)
        process.exit(1);
    })