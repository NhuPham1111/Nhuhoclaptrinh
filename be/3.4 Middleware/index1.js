import express from "express";
import bodyParser from "body-parser";
// dirname lấy tên thư mục từ một đường dẫn file.
import { dirname } from "path";

// fileURLToPath chuyển import.meta.url (dạng file:// URL) thành đường dẫn file.
import { fileURLToPath } from "url";

// Tạo đường dẫn thư mục chứa index1.js; ES modules không có sẵn __dirname.
const __dirname = dirname(fileURLToPath(import.meta.url));

// Tạo ứng dụng Express và chọn cổng HTTP mà server sẽ lắng nghe.
const app = express();
const port = 3000;

// Middleware phân tích form HTML (application/x-www-form-urlencoded) thành req.body.
// Các parser khác: bodyParser.json() cho JSON, bodyParser.text() cho text/plain,
// bodyParser.raw() cho dữ liệu nhị phân; chọn parser khớp với Content-Type request.
// Middleware này cần đặt trước các route muốn đọc req.body.
app.use(bodyParser.urlencoded({ extended: true }));

app.post("/submit", (req, res) => {
  console.log(req.body);
  res.send(`Band name: ${req.body.street} ${req.body.pet}`);
});

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
