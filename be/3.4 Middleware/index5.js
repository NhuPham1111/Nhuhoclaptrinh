import express from "express";
import morgan from "morgan";
import { dirname, join } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const app = express();
const port = Number(process.env.PORT) || 3000;

// App-wide middleware: log requests and parse form or JSON request bodies.
app.use(morgan("dev"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Serve files such as public/index.html, CSS, and images.
app.use(express.static(join(__dirname, "public")));

// Route-specific middleware: validate and normalize submitted form fields.
function validateBandForm(req, res, next) {
  const street = req.body?.street;
  const pet = req.body?.pet;

  if (typeof street !== "string" || typeof pet !== "string" ||
      !street.trim() || !pet.trim()) {
    return res.status(400).type("text").send("Please enter both a street and a pet name.");
  }

  req.body.street = street.trim();
  req.body.pet = pet.trim();
  next();
}

app.post("/submit", validateBandForm, (req, res) => {
  const bandName = `${req.body.street} ${req.body.pet}`;
  res.type("text").send(`Your band name is: ${bandName}`);
});

// Demo route: visit /error-demo to send an error to the error-handling middleware.
app.get("/error-demo", (req, res, next) => {
  next(new Error("This is a demo error."));
});

// 404 middleware handles requests that did not match a route or static file.
app.use((req, res) => {
  res.status(404).type("text").send("Page not found.");
});

app.use((req,res) => {
  res.status(201).type("text").send("You set name successfully"); 
})

// Error-handling middleware must come after routes and other middleware.
app.use((err, req, res, next) => {
  console.error(err);
  if (res.headersSent) {
    return next(err);
  }
  res.status(500).type("text").send("Something went wrong.");
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
