import express from "express";
import dotenv from "dotenv";
import noteRoutes from "./routes/notes.route.js";
import authRoutes from "./routes/auth.route.js";
import { connectDb } from "./lib/db.js";
import cors from "cors";
import path from "path";
import { fileURLToPath } from "url";

dotenv.config();

const app = express();
const port = process.env.PORT || 5001;

// CORS setup (allow local dev and deployed domains)
app.use(
  cors({
    origin: true,
    credentials: true,
  })
);

// Middleware
app.use(express.json());

// Ensure MongoDB is connected before handling API requests (for Serverless/Vercel)
app.use("/api", async (req, res, next) => {
  await connectDb();
  next();
});

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/debt-notes", noteRoutes);

// ----------------------
// Serve frontend build (when running as standalone Node server)
// ----------------------
if (!process.env.VERCEL) {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = path.dirname(__filename);
  const frontendDist = path.join(__dirname, "../../frontend/dist");

  app.use(express.static(frontendDist));

  app.get("*", (req, res) => {
    res.sendFile(path.join(frontendDist, "index.html"));
  });

  app.listen(port, () => {
    console.log("Server is running on port", port);
    connectDb();
  });
}

export default app;
