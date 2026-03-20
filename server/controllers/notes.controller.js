import NotesModel from "../model/note.model.js";
import AppError from "../utils/appError.js";

export const createNote = async (req, res) => {
  const { title, content, tag } = req.body;
  const note = await NotesModel.create({ title, content, tag });
  res.status(201).send({ message: "Note Created Successfully", note });
};

export const getNotes = async (req, res) => {
  const { tag } = req.query;
  const filter = tag ? { tag } : {};
  const notes = await NotesModel.find(filter).sort({ createdAt: -1 });
  if (!notes) {
    throw new AppError("Note does not exist please try creating new one", 404);
  }
  res.status(200).send({ notes });
};

export const updateNote = async (req, res) => {
  const { id } = req.params;
  const { title, content, tag } = req.body;
  if (!id) {
    throw new AppError("Please provide an ID of the note");
  }
  const note = await NotesModel.findByIdAndUpdate(
    id,
    { title, content, tag },
    { returnDocument: "after", runValidators: true },
  );

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
  const note = await NotesModel.findByIdAndDelete(id);
  if (!note) {
    throw new AppError(
      "that note does not exist please try creating new one",
      404,
    );
  }
  res.status(200).send({ message: "Deleted Successfully" });
};
