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

export const fetchAllSupermarket = async () => {
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
    const response = await axios.get(`http://localhost:8000/user/${id}`);
    return response.data;
  } catch (error) {
    console.error(`Error fetching user with id ${id}:`, error);
    throw error;
  }
};

export const fetchSingleSupermarket = async (id) => {
  try {
    const response = await axios.get(`${supermarketapi}/suppermarket/${id}`);
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error(`Error fetching single post with id ${id}:`, error);
    throw error;
  }
};
