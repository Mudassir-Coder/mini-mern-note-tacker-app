import express from "express";
import cors from "cors";

import { connectDB } from "./config/database.js";
import globalErrorHandler from "./middleware/errorMiddleware.js";
import notesRouter from "./routes/notes.routes.js";

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

app.use("/api/notes", notesRouter);
// Routes
app.get("/", (req, res) => {
  res.send("Hello from the server!");
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, async () => {
  await connectDB();
  console.log(`Server is running on port http://localhost:${PORT}`);
});

// Global error handling middleware (should be after all routes)
app.use(globalErrorHandler);
