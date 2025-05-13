import "./pre-init";

import express from "express";
import main from "./routes/main";
import posts from "./routes/posts";
import { setupSwagger } from "./swagger";

const app = express();
app.use(express.json());

// Routes
app.use("/api/hello", main);
app.use("/api/posts", posts);

setupSwagger(app);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log("ENV", process.env.NODE_ENV);
  console.log(`Server running on port ${PORT}`);
  console.log(`Swagger docs at http://localhost:${PORT}/api-docs`);
});
