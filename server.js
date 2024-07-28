const express = require("express");
const app = express();
const port = 3000;
const cors = require("cors");

app.use(
  cors({
    origin: "*", // 允许所有来源的请求。如果你有特定的前端地址，可以指定，如 'http://localhost:5173'
    methods: ["GET", "POST"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);
app.use(express.urlencoded({ extended: true }));
app.get("/", (req, res) => {
  res.send("Hello World!");
});
//
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
