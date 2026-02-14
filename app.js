const express = require("express");
const app = express();
const UserModel = require("./models/user");
const postsModel = require("./models/posts");
const posts = require("./models/posts");

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/create", async function (req, res) {
  let user = await UserModel.create({
    username: "Code Crafter",
    email: "codecraft@gmail.com",
    age: 22,
  });
  res.send(user);
});

app.get("/post/create", async function (req, res) {
  let posts = await postsModel.create({
    postdata: "This is my first post",
    user: "69900ebbf42e78dd034ee495",
  });
  let user = await UserModel.findOne({ _id: "69900ebbf42e78dd034ee495" });
  user.posts.push(posts._id);
  await user.save();
  res.send({ posts, user });
});

app.listen(3000);
