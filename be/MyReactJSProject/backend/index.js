import express from "express";
import fs, { readFileSync } from "fs";

const PORT = 4000;
const app = express();
app.use(express.json);
const DB_FILE = "../mockdata/db.json";
const ReadData = () => {
  const data = readFileSync(DB_FILE);
  return JSON.parse(data);
};

app.listen(PORT, () => {
  console.log(`🚀 Server running at ${PORT}`);
});
