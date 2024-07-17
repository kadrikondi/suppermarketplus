import axios from "axios";

const apiUsers = "http://localhost:8000/";
const supermarketapi = "http://localhost:8000/apiv1";

export const fetchUsers = async () => {
  try {
    const response = await axios.get(apiUsers);
    return response.data;
  } catch (error) {
    console.error("Error fetching users:", error);
    throw error;
  }
};

export const fetchSupermarket = async () => {
  try {
    const response = await axios.get(`${supermarketapi}/allsuppermarket`);
    return response.data;
  } catch (error) {
    console.error("Error fetching supermarket data:", error);
    throw error;
  }
};

export const fetchUser = async (id) => {
  try {
    const response = await axios.get(`https://api.github.com/user/${id}`);
    return response.data;
  } catch (error) {
    console.error(`Error fetching user with id ${id}:`, error);
    throw error;
  }
};

export const fetchSinglePost = async (id) => {
  try {
    const response = await axios.get(`${supermarketapi}/${id}`);
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error(`Error fetching single post with id ${id}:`, error);
    throw error;
  }
};
