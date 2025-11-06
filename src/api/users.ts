import apiClient from "./apiClient";

export default async function getUsers(query?: string, page: number = 1) {
  try {
    const response = await apiClient.get("/users", {
      params: {
        name: query || undefined,
        page,
        per_page: 10,
      },
    });
    return response.data;
  } catch (error) {
    return null;
  }
}

export async function getUserDetails(id: number) {
  try {
    const response = await apiClient.get(`/users/${id}`);
    console.log(response.data);
    return response.data;
  } catch (error) {
    return null;
  }
}
