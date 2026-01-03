

const axios = require("axios");

const BASE_URL = "https://jsonplaceholder.typicode.com/users";

// READ
exports.getUsers = async (req, res) => {
  const response = await axios.get(BASE_URL);
  res.json(response.data);
};

// CREATE
exports.createUser = async (req, res) => {
  const response = await axios.post(BASE_URL, req.body);
  res.json(response.data);
};

// UPDATE
exports.updateUser = async (req, res) => {
  const { id } = req.params;
  const response = await axios.put(`${BASE_URL}/${id}`, req.body);
  res.json(response.data);
};

// DELETE
exports.deleteUser = async (req, res) => {
  const { id } = req.params;
  const response = await axios.delete(`${BASE_URL}/${id}`);
  res.json({ message: "User deleted", response: response.data });
};
