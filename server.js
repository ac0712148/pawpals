require("dotenv").config();
const express = require("express");
const app = express();
const path = require("path");
const morgan = require("morgan");
const initDb = require("./config/initDb");
const authRouter = require("./routes/auth");
const usersRouter = require("./routes/users");
const postsRouter = require("./routes/posts");
const errorMiddleware = require("./routes/errorMiddleware");

const PORT = process.env.PORT || 3001;

// log all requests to the console in development
if (process.env.NODE_ENV !== "production") {
  app.use(morgan("dev"));
}

// Setting up express to use json and set it to req.body
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

initDb();

// Serve up static assets in production (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

app.use(authRouter, usersRouter, postsRouter, errorMiddleware);

// PART OF THE TEST CODE FROM Home/index.js
const multer = require("multer");
const AWS = require("aws-sdk");
const storage = multer.memoryStorage();
const upload = multer({ storage });
const s3bucket = new AWS.S3({
  accessKeyId: process.env.AWSAccessKeyId,
  secretAccessKey: process.env.AWSSecretKey,
  region: process.env.AWS_REGION,
});
app.post("/api/photos", upload.single("file"), (req, res) => {
  const params = {
    Bucket: process.env.AWS_BUCKET,
    Key: req.file.originalname,
    Body: req.file.buffer,
    ContentType: req.file.mimetype,
    ACL: "public-read",
  };
  console.log(params);

  s3bucket.upload(params, (err, data) => {
    if (err) {
      res.sendStatus(500).json({ error: true, Message: err });
    }

    // console.log(req.file, data);
    // res.send("Hit route");
    res.json(data);
    console.log(data);
  });
});

// Send all other requests to react app
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

app.listen(PORT, () => {
  console.log(`🌎 ==> Server now on port ${PORT}!`);
});
