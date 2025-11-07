import apiClient from "./apiClient";
import type { userProps } from "@/types/userProps";

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
    console.error(error);
    return null;
  }
}

export async function saveUserDetail(data: userProps) {
  try {
    await apiClient.patch(`/users/${data.id}`, data);
    return true;
  } catch (error) {
    console.error(error);
    return false;
  }
}
