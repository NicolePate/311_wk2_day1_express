
const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const port = process.env.PORT || 5000;

const { users } = require('./state')
const usersCount = users.length;

// app.use(bodyParser.json());
app.use(express.json());
app.use(express.urlencoded({extended: false}));

/* BEGIN - create routes here */
app.get('/users', (req, res) => {
 return res.json(users);
})

// GET /users/1

app.get('users/1', (req, res) => {
  return res.json(users[0]);
 })

// POST /users
app.post('/users', (req, res) => {
    users.push({
      _id: (counter + 1),
      ...req.body
});
res.json(users);
})

// PUT /users/1
app.put('/users/1', (req, res) => {
  users.forEach(user => {
    if (user._id == 1) {
      user.name = req.body.name;
      user.occupation = req.body.occupation;
      user.avatar = req.body.avatar;
    }
    res.json(users)
  })
})

//  DELETE /users/1

app.delete('/users/1', (req, res) => {
  let newUsers = users.slice(1);
  // return res.send({ msg: `Deleted`})
  res.json(newUsers)
})
/* END - create routes here */

app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`)
});