const mongoose = require(`mongoose`);
// mongoose.connect(`mongodb://127.0.0.1:27017/testingthedatabase`);

const postsSchema = new mongoose.Schema({
  postdata: String,
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  Date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("posts", postsSchema);
