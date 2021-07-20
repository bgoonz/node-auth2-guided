const bcrypt = require("bcryptjs");

const router = require("express").Router();
const tokenBuilder = require( './token-builder' );
const Users = require("../users/users-model.js");
const checkAuthPayload = require("./check-payload-middleware");

router.post("/register", checkAuthPayload, (req, res, next) => {
  let user = req.body;

  // bcrypting the password before saving
  const rounds = process.env.BCRYPT_ROUNDS || 8; // 2 ^ 8
  const hash = bcrypt.hashSync(user.password, rounds);

  // never save the plain text password in the db
  user.password = hash;

  Users.add(user)
    .then((saved) => {
      res.status(201).json({ message: `Great to have you, ${saved.username}` });
    })
    .catch(next); // our custom err handling middleware in server.js will trap this
});

router.post("/login", checkAuthPayload, (req, res, next) => {
  let { username, password } = req.body;

  Users.findBy({ username }) // it would be nice to have middleware do this
    .then(([user]) => {
      if (user && bcrypt.compareSync(password, user.password)) {
        // generate a token and send it back
        const token = tokenBuilder(user);
        // the client will provide token in future requests
        res.status(200).json({
          message: `Welcome back ${user.username}!`,
        });
      } else {
        next({ status: 401, message: "Invalid Credentials" });
      }
    })
    .catch(next);
});

module.exports = router;
