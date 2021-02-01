const express = require('express');
const router = express.Router();
const Session = require("../models/SessionModel");



router.post('/', (req, res, next) => {
  const { session } = req.body;
  console.log("patata");
  isLogged(req, res, next, session.accessToken);
  console.log("patata frita");

  res.status(200).json({ title: 'Express' })
});

function isLogged (req, res, next, userId) {
  Session.findOne({ userId })
    .then((session) => {
      if (!session) {
        console.log("forbidden")
        //res.status(401).json({
          //errorMessage: "No authorized. You need to login.",
        //});
        return;
      } else {
        console.log("session");
        console.log(session);
        next();
      }
    })
    //.catch((error) => res.status(500).json({ errorMessage: error }));

}

module.exports = router;
