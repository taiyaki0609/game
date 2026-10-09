
const express = require("express");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;

// publicフォルダ内のファイルを公開
app.use(express.static(path.join(__dirname, "public")));

// トップページ
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

app.listen(PORT, "0.0.0.0", () => {
  console.log(`PlayPop is running on port ${PORT}`);
});
