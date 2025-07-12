const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("✅ App is running");
});

app.get("/zid/redirect", (req, res) => {
  console.log("🔁 Redirect params:", req.query);
  res.send("✅ Redirect successful from Zid");
});

app.get("/zid/callback", (req, res) => {
  console.log("📩 Callback params:", req.query);
  res.send("✅ Callback received from Zid");
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`🚀 Server is running on port ${PORT}`);
});
