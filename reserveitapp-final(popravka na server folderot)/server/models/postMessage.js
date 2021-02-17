import mongoose from 'mongoose';

const postSchema= mongoose.Schema({
    place:String,
    numberPeople: String,
    date: String,
    time: String
});

const PostMessage= mongoose.model('PostMessage', postSchema);

export default PostMessage;