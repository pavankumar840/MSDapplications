const express = require('express');
const mongoose = require('mongoose');
const User = require('../db/User');
const route = express.Router();

route.post('/addUser', async (req, res) => {
  const { username, password } = req.body;
  let user = {};
  user.firstName = username;
  user.lastName = password;
  let userModel = new User(user);
  await userModel.save();
  res.json(userModel);
});


module.exports = route;
