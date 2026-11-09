import express from "express";
import morgan from "morgan";
// Morgan để ghi lại nhật ký request trong terminal, giúp theo dõi các request đến server.
//VD: GET / 200 5.123 ms - 12
// morgan("dev")	Log ngắn gọn, có màu, phù hợp development
// morgan("tiny")	Log tối giản
// morgan("short")	Log ngắn
// morgan("common")	Log theo định dạng Common Log Format
// morgan("combined")	Log chi tiết hơn, phù hợp access log

const app = express();
const port = 3000;

app.use(morgan("tiny"));

app.get("/", (req, res) => {
  res.send("Hello");
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
