const express = require("express");
const cors = require("cors");
const path = require("path");
const app = express();
const PORT = 8000;

app.use(cors());

const dir = path.join(__dirname, 'public');
app.use(express.static(dir));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, 'public/index.html'));
});

app.listen(PORT, () => {
  console.log(`Listening on Port ${PORT}`);
});

