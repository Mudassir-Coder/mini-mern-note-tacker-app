import NotesModel from "../model/note.model";
import AppError from "../utils/appError";

export const createNote = async (req, res) => {
  const { title, content, tag } = req.body;
  const existingNote = NotesModel.findOne({ title });
  if (existingNote) {
    throw new AppError(`This note's title ${title} is already exisit`, 400);
  }
  const note = await NotesModel.create({ title, content, tag });
  res.status(201).send({ message: "Note Created Successfully", note });
};

export const getNotes = async (req, res) => {
  const { tag } = req.query;
  const filter = tag ? { tag } : {};
  const note = NotesModel.find({ filter }).sort({ createdAt: -1 });
  if (!note) {
    throw new AppError("Note does not exist please try creating new one", 404);
  }
  res.status(200).send({ note });
};

export const updateNote = async (req, res) => {
  const { id } = req.params;
  const { title, content, tag } = req.body;
  if (!id) {
    throw new AppError("Please provide an ID of the note");
  }
  const note = NotesModel.findByIdAndUpdate({ id }, { title, content, tag });
  if (!note) {
    throw new AppError(
      "Notes does not exists please try creating new one",
      404,
    );
  }
  res.status(200).send({ message: "Updated Successfully", note });
};

export const deleteNote = async (req, res) => {
  const { id } = req.params;
  const note = NotesModel.findByIdAndDelete({ id });
  if (!note) {
    throw new AppError(
      "that note does not exist please try creating new one",
      404,
    );
  }
  res.status(200).send({ message: "Deleted Successfully" });
};
