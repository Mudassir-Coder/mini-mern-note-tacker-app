import { Router } from "express";

import {
  createNote,
  deleteNote,
  getNotes,
  updateNote,
} from "../controllers/notes.controller.js";

const notesRouter = Router();

notesRouter.post("/", createNote);
notesRouter.get("/", getNotes);
notesRouter.put("/:id", updateNote);
notesRouter.delete("/:id", deleteNote);

export default notesRouter;
