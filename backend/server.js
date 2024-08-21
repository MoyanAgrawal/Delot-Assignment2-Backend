const express = require("express");
const cors = require("cors");
const mongoose=require("mongoose")
const env = require("dotenv");
const bodyParser=require("body-parser")
const Port = 4444;
env.config();
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

const desertRoutes = require("./routes/desertRoutes");

mongoose
  .connect(`${process.env.MongoURI}/desertD`) 
  .then(() => {
    console.log("Db connected Successfully");
  })
  .catch((err) => {
    console.log("error in connecting db",err);
  });

app.use(cors());
app.use(express.json());
app.use("/api",desertRoutes)


  
app.get("/", (req, res) => {
  res.send("Hello");
});

app.listen(Port, () => {
  console.log(`Server is running on ${Port}`);
});
