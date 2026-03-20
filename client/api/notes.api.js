import axios from "axios";
import { useQuery, useMutation } from "@tanstack/react-query";
const API_BASE_URL = "http://localhost:5000/api/notes";

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

const createNote = async (data) => {
  const response = await api.post("/", data);
  return response.data;
};

const getNotes = async (tag) => {
  const response = await api.get(`/${tag ? `?tag=${tag}` : ""}`);
  return response.data;
};

const deleteNote = async (id) => {
  const response = await api.delete(`/${id}`);
  return response.data;
};

const updateNote = async (id, data) => {
  const response = await api.put(`/${id}`, data);
  return response.data;
};
