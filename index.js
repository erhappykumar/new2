import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import path, { dirname } from "path";
import { Console } from "console";
import dotenv from "dotenv";
import { env } from "process";
dotenv.config();
const server = express();
/////aaa
server.use(bodyParser.json());
const __dirname = path.resolve();
////////////corsOptions
const uri =process.env.URI;

mongoose
  .connect(uri)
  .then(() => console.log("MongoDB connected successfully!"))
  .catch((err) => console.error("Connection error:", err));

const userschema = new mongoose.Schema({
  name: String,
  password: String,
});

const User = mongoose.model("User", userschema);

const db = mongoose.connection;
//console.log(userschema.find({username:"RaviKumar"}));
server.use(cors());
const port = 8080;
server.use(express.static("frontend/dist"))
server.get("/", (req, res) => {
  /////////////////////////////////
  let user = new User({
    name: req.body.username,
    password: req.body.password,
  });


  console.log("Received data:", req.body);
  //res.json({ message: "Data received successfully" }); ////

  /////////////////////////////////////////////

  //res.send({ message: "Data received successfully" });
  console.log("sent data:");
});
server.post("/", async (req, res) => {
  // let user = new User({
  //   name: req.body.username,
  //   password: req.body.password,
  // });
let username=req.body.username;
  let docs = await User.find({
    $or: [
      { full_name: { $regex: username, $options: "i" } },
      { username: { $regex: username, $options: "i" } },
      { city: { $regex: username, $options: "i" } },
      { complete_address: { $regex: username, $options: "i" } },
      { email: { $regex: username, $options: "i" } },
      // Mobile numbers don't need $options: "i"
      { mobile_number: { $regex: username } }
    ]
  });
  res.json(docs)
  //res.sendFile(_dirname,"frontend" ,"dist","index.html")
  //res.send(docs);
  Console.log(username,docs)
})
server.listen(port, () => {
  console.log(`Node.js server running at http://localhost:${port}`);
});
