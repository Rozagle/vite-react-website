const express = require("express");
const app = express();
const cors = require("cors");
const corsOptions = {
  origin: ["http://localhost:5173"],
};

app.use(cors(corsOptions));

app.get("/api", (req, res) => {
  res.json({ fruit: ["appleeee", " orange", "bannana"] });
});

app.listen(8000, () => {
  console.log("server port on 8000");
});
