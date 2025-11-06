import apiClient from "./apiClient";

export default async function getUsers() {
  try {
    const response = await apiClient.get("/users");
    return response.data;
  } catch (error) {
    return null;
  }
}
