require("dotenv").config();
const express = require("express");
const app = express();
const port = 3000;
const githubData = {
  login: "yogeshomkar2012",
  id: 75164383,
  node_id: "MDQ6VXNlcjc1MTY0Mzgz",
  avatar_url: "https://avatars.githubusercontent.com/u/75164383?v=4",
  gravatar_id: "",
  url: "https://api.github.com/users/yogeshomkar2012",
  html_url: "https://github.com/yogeshomkar2012",
  followers_url: "https://api.github.com/users/yogeshomkar2012/followers",
  following_url:
    "https://api.github.com/users/yogeshomkar2012/following{/other_user}",
  gists_url: "https://api.github.com/users/yogeshomkar2012/gists{/gist_id}",
  starred_url:
    "https://api.github.com/users/yogeshomkar2012/starred{/owner}{/repo}",
  subscriptions_url:
    "https://api.github.com/users/yogeshomkar2012/subscriptions",
  organizations_url: "https://api.github.com/users/yogeshomkar2012/orgs",
  repos_url: "https://api.github.com/users/yogeshomkar2012/repos",
  events_url: "https://api.github.com/users/yogeshomkar2012/events{/privacy}",
  received_events_url:
    "https://api.github.com/users/yogeshomkar2012/received_events",
  type: "User",
  site_admin: false,
  name: "yogesh",
  company: null,
  blog: "",
  location: null,
  email: null,
  hireable: null,
  bio: "I m developper",
  twitter_username: null,
  public_repos: 1,
  public_gists: 0,
  followers: 0,
  following: 1,
  created_at: "2020-11-28T10:51:59Z",
  updated_at: "2023-06-28T02:18:03Z",
};
app.get("/", (req, res) => {
  res.send("Hello Mr Yogesh");
});

app.get("/twiter", (req, res) => {
  res.send("Yoogesh twiter");
});
app.get("/login", (req, res) => {
  res.send("login");
});
app.get("/github", (req, res) => {
  res.json(githubData);
});
app.listen(process.env.PORT, () => {
  console.log(`example app listing ${port}`);
});
