const express = require("express");
const cors = require("cors");
const app = express();
const { dbConnection } = require("./configs/db");
const { userRouter } = require("./routes/userRouter");



require("dotenv").config();

const port = process.env.PORT || 3000;

app.use(express.json());
app.use(cors());

// app.use("/",(req,res)=>{
//     res.send("Home Page")
// })
app.use("/api",userRouter)

app.listen(port, async () => {
  try {
    await dbConnection;
    console.log(`server is connected DB`);
  } catch (error) {
    console.log("error while connecting to DB");
  }
  console.log(`server is running on ${port}`);
});
