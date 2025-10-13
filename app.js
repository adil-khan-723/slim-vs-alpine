const os = require("os");
const bcrypt = require("bcrypt"); // native module to trigger musl issues
const express = require("express");
const app = express();

app.get("/", async (req, res) => {
  const hash = await bcrypt.hash("docker", 10);
  res.send(`Hello from ${os.platform()}! Hash: ${hash.substring(0, 10)}...`);
});

app.listen(3000, () => console.log("Running on port 3000"));