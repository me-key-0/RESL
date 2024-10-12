const express = require("express");
const cookieParser = require("cookie-parser");
const cors = require("cors");
// require("dotenv").config();



const app = express();
const connectDb = require("./config/db");
app.use(cookieParser());

const port = process.env.PORT || 3030;

const server = app.listen(port, () => {
  console.log(`The server is running on port ${port}`);
});

connectDb();

app.use(
  cors({
    // origin: "",
  })
);

app.use(express.json());

app.use("/employees", require("./routes/employeeRoutes"));
app.use("/managers", require("./routes/managerRoutes"));
app.use("/users", require("./routes/userRoutes"));
