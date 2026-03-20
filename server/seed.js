import "dotenv/config";

import mongoose from "mongoose";

import { connectDB } from "./config/database.js";
import NotesModel from "./model/note.model.js";

const sampleNotes = [
  {
    title: "Project kickoff checklist",
    content:
      "Define scope, align stakeholders, list milestones, and set communication cadence for the sprint.",
    tag: "work",
  },
  {
    title: "App ideas: mood tracker",
    content:
      "Simple daily mood log with streaks, tags, and export. Could pair with a tiny AI summary.",
    tag: "ideas",
  },
  {
    title: "Grocery list",
    content: "Coffee beans, oats, eggs, spinach, tomatoes, feta, olive oil.",
    tag: "personal",
  },
  {
    title: "Study session plan",
    content:
      "Review data structures: graphs, BFS/DFS, and practice two medium LeetCode problems.",
    tag: "study",
  },
  {
    title: "Retro notes template",
    content: "Keep/Start/Stop, wins, risks, and 1-2 action items with owners.",
    tag: "work",
  },
];

async function seed() {
  try {
    await connectDB();

    // Clean existing notes to avoid duplicates on repeated seeds
    await NotesModel.deleteMany({});

    const inserted = await NotesModel.insertMany(sampleNotes);
    console.log(`Seeded ${inserted.length} notes.`);
  } catch (error) {
    console.error("Seeding failed:", error.message);
    process.exitCode = 1;
  } finally {
    await mongoose.connection.close();
    console.log("Mongo connection closed.");
  }
}

seed();
