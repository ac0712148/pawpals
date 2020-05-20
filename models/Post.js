const mongoose = require('mongoose');
const Schema = mongoose.Schema;

/* A post must contain
    - An authorId to relate to the user (Done)
    - A text body for the post (Done)
    - A timestamp for when the post was created
    - A comments section is a list of comments where each comment contains the following
        * An Id for the author/commenter of the comment
        * A text body of the comment
        * A time stamp of when the comment was made
    - A number that shows the number of likes
    - A list of users who like the post
*/

const PostSchema = new Schema({
    authorId: { // Author ID 
        type: Schema.Types.ObjectId,
        required: true,
        ref: "User"
    },
    text: { // The text of the post
        type: String,
        trim: true,
        required: true
    },
    timeStamp: { // A timestamp to see when the post was created
        type: Number,
        required: true
    },
    comments: {
        type: [{
            commenterId: String,
            text: String,
            timeStamp: Number
        }],
        required: true
    },
    likesCount: {
        type: Number,
        required: true
    },
    likers: {
        type: [String],
        required: true
    },
});

const Post = mongoose.model('Post', PostSchema);

module.exports = Post;