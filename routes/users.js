const express = require("express");
const db = require("../models");
const isAuthenticated = require("../config/isAuthenticated");

const router = express.Router();

// use isAuthenticated middleware to protect this route
//this is checking if the user is logged in
router.get("/api/user/:id", isAuthenticated, (req, res) => {
  db.User.findById(req.params.id)
    .then((data) => {
      if (data) {
        res.json(data);
      } else {
        res.status(404).send({ success: false, message: "No user found" });
      }
    })
    .catch((err) => res.status(400).send(err));
});

//get all users
router.get("/api/users", async (req, res) => {
  const users = await db.User.find();
  res.status(200).json(users);
});

//what we have
//get all users
//login
//signup

//we need
//add user to follwing
//remove a user from following
//users following me
//user removed following me
//update a user's info

//update a user's info
router.patch("/api/user/:id", isAuthenticated, (req, res) => {
  const { id } = req.params;
  if (req.user.id !== id) {
    return res.sendStatus(401);
  }
  db.User.findOneAndUpdate(
    { _id: id },
    {
      $set: req.body,
    },
    { new: true, upsert: true, setDefaultsOnInsert: true },
    (err) => {
      if (err !== null && err.name === "MongoError" && err.code === 11000) {
        return res
          .status(500)
          .send({ message: "This email is already in use." });
      }
    }
  )
    .then((user) => {
      return res.json(user);
    })
    .catch((err) => {
      if (err !== null && err.name === "MongoError" && err.code === 11000) {
        return res
          .status(500)
          .send({ message: "This email is already in use." });
      }
      console.log(err);
      return res.status(500).json({ message: err });
    });
});

//get all followers
router.get("/api/followers/:id", async (req, res) => {
  const users = await db.User.find();
  res.status(200).json(users);
});

//add a user to the list of users that are following our user
router.patch("/api/followers/:id", isAuthenticated, (req, res) => {
  //making sure the user is logged in and is the ONE user
  const { id } = req.params;
  if (req.user.id !== id) {
    return res.sendStatus(401);
  }
  //if the user is logged in, find and update. add to set: followers by their ID
  db.User.findOneAndUpdate(
    { _id: id },
    {
      $addToSet: { followers: req.body.followers },
    },
    { new: true, upsert: true, setDefaultsOnInsert: true },
    (err) => {
      if (err !== null && err.name === "MongoError" && err.code === 11000) {
        return res.status(500).send({ message: "something went wrong." });
      }
    }
  )
    .then((user) => {
      return res.json(user);
    })
    .catch((err) => {
      if (err !== null && err.name === "MongoError" && err.code === 11000) {
        return res
          .status(500)
          .send({ message: "This email is already in use." });
      }
      console.log(err);
      return res.status(500).json({ message: err });
    });
});

//unfollow
router.patch("/api/unfollowers/:id", isAuthenticated, (req, res) => {
  const { id } = req.params;
  if (req.user.id !== id) {
    return res.sendStatus(401);
  }
  db.User.findOneAndUpdate(
    { _id: id },
    {
      $pull: { followers: req.body.followers },
    },
    { new: true, upsert: true, setDefaultsOnInsert: true },
    (err) => {
      if (err !== null && err.name === "MongoError" && err.code === 11000) {
        return res.status(500).send({ message: "something went wrong." });
      }
    }
  )
    .then((user) => {
      return res.json(user);
    })
    .catch((err) => {
      if (err !== null && err.name === "MongoError" && err.code === 11000) {
        return res
          .status(500)
          .send({ message: "This email is already in use." });
      }
      console.log(err);
      return res.status(500).json({ message: err });
    });
});

router.get("/api/following/:id", async (req, res) => {
  const users = await db.User.find();
  res.status(200).json(users.following());
});

router.patch("/api/following/:id", isAuthenticated, (req, res) => {
  //making sure the user is logged in and is the ONE user
  const { id } = req.params;
  if (req.user.id !== id) {
    return res.sendStatus(401);
  }
  //if the user is logged in, find and update. add to set: followers by their ID
  db.User.findOneAndUpdate(
    { _id: id },
    {
      $addToSet: { following: req.body.following },
    },
    { new: true, upsert: true, setDefaultsOnInsert: true },
    (err) => {
      if (err !== null && err.name === "MongoError" && err.code === 11000) {
        return res.status(500).send({ message: "something went wrong." });
      }
    }
  )
    .then((user) => {
      return res.json(user);
    })
    .catch((err) => {
      if (err !== null && err.name === "MongoError" && err.code === 11000) {
        return res
          .status(500)
          .send({ message: "This email is already in use." });
      }
      console.log(err);
      return res.status(500).json({ message: err });
    });
});

router.patch("/api/unfollowing/:id", isAuthenticated, (req, res) => {
  //making sure the user is logged in and is the ONE user
  const { id } = req.params;
  if (req.user.id !== id) {
    return res.sendStatus(401);
  }
  //if the user is logged in, find and update. add to set: followers by their ID
  db.User.findOneAndUpdate(
    { _id: id },
    {
      $pull: { following: req.body.following },
    },
    { new: true, upsert: true, setDefaultsOnInsert: true },
    (err) => {
      if (err !== null && err.name === "MongoError" && err.code === 11000) {
        return res.status(500).send({ message: "something went wrong." });
      }
    }
  )
    .then((user) => {
      return res.json(user);
    })
    .catch((err) => {
      if (err !== null && err.name === "MongoError" && err.code === 11000) {
        return res
          .status(500)
          .send({ message: "This email is already in use." });
      }
      console.log(err);
      return res.status(500).json({ message: err });
    });
});

//profile picture
router.patch("/api/profilePic/:id", isAuthenticated, (req, res) => {
  const { id } = req.params;
  if (req.user.id !== id) {
    return res.sendStatus(401);
  }
  db.User.findOneAndUpdate(
    { _id: id },
    {
      $set: req.body,
    },
    { new: true, upsert: true, setDefaultsOnInsert: true },
    (err) => {
      if (err !== null && err.name === "MongoError" && err.code === 11000) {
        return res
          .status(500)
          .send({ message: "This email is already in use." });
      }
    }
  )
    .then((user) => {
      return res.json(user);
    })
    .catch((err) => {
      if (err !== null && err.name === "MongoError" && err.code === 11000) {
        return res
          .status(500)
          .send({ message: "This email is already in use." });
      }
      console.log(err);
      return res.status(500).json({ message: err });
    });
});

//photos
router.patch("/api/userPhotos/:id", isAuthenticated, (req, res) => {
  const { id } = req.params;
  if (req.user.id !== id) {
    return res.sendStatus(401);
  }
  db.User.findOneAndUpdate(
    { _id: id },
    {
      $addToSet: { userPhotos: req.body.photo },
    },
    { new: true, upsert: true, setDefaultsOnInsert: true },
    (err) => {
      if (err !== null && err.name === "MongoError" && err.code === 11000) {
        return res
          .status(500)
          .send({ message: "This email is already in use." });
      }
    }
  )
    .then((user) => {
      return res.json(user);
    })
    .catch((err) => {
      if (err !== null && err.name === "MongoError" && err.code === 11000) {
        return res
          .status(500)
          .send({ message: "This email is already in use." });
      }
      console.log(err);
      return res.status(500).json({ message: err });
    });
});

//get all userPhotos
router.get("/api/userPhotos", async (req, res) => {
  const users = await db.User.find();
  res.status(200).json(users);
});

//delete a userPhoto
router.delete("/api/userPhotos/:id", isAuthenticated, (req, res) => {
  const { id } = req.params;
  console.log(id);
  console.log(req.body);
  if (req.user.id !== id) {
    return res.sendStatus(401);
  }
  db.User.findOneAndUpdate(
    { _id: id },
    {
      $pull: { userPhotos: req.body.photo },
    },
    { new: true, upsert: true, setDefaultsOnInsert: true },
    (err) => {
      if (err !== null && err.name === "MongoError" && err.code === 11000) {
        return res
          .status(500)
          .send({ message: "This email is already in use." });
      }
    }
  )
    .then((user) => {
      return res.json(user);
    })
    .catch((err) => {
      if (err !== null && err.name === "MongoError" && err.code === 11000) {
        return res
          .status(500)
          .send({ message: "This email is already in use." });
      }
      console.log(err);
      return res.status(500).json({ message: err });
    });
});

//get all users bio
router.get("/api/usersBio", async (req, res) => {
  const users = await db.User.find();
  res.status(200).json(users);
});

//add and update a user bio
router.patch("/api/userBio/:id", isAuthenticated, (req, res) => {
  const { id } = req.params;
  if (req.user.id !== id) {
    return res.sendStatus(401);
  }
  db.User.findOneAndUpdate(
    { _id: id },
    {
      $set: req.body,
    },
    { new: true, upsert: true, setDefaultsOnInsert: true },
    (err) => {
      if (err !== null && err.name === "MongoError" && err.code === 11000) {
        return res
          .status(500)
          .send({ message: "This email is already in use." });
      }
    }
  )
    .then((user) => {
      return res.json(user);
    })
    .catch((err) => {
      if (err !== null && err.name === "MongoError" && err.code === 11000) {
        return res
          .status(500)
          .send({ message: "This email is already in use." });
      }
      console.log(err);
      return res.status(500).json({ message: err });
    });
});

module.exports = router;
