const express = require("express");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3040;

app.use(express.static(path.join(__dirname, "public")));

app.get("/health", (req, res) => {
  res.status(200).json({
    status: "OK",
    message: "BrightWave Studio is running",
    timestamp: new Date().toISOString()
  });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});