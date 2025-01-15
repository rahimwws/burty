import axios from "axios";

import {
  getAccessToken,
  getRefreshToken,
  saveTokens,
  removeTokens,
} from "../token/storage";
import { toast } from "@/shared/ui/Toast";
import { navigate } from "@/shared/lib/navigation";

const API_URL: string = process?.env?.EXPO_PUBLIC_API_URL || 'https://burty-api.ru/api/';

const client = axios.create({
  baseURL: API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

export const clientWithoutToken = axios.create({
  baseURL: API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

client.interceptors.request.use(
  async (config) => {
    const token = await getAccessToken();
    if (token) {
      config.headers["Authorization"] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

const refreshAccessToken = async () => {
  try {
    const refreshToken = await getRefreshToken();
    if (!refreshToken) {
      throw new Error("No refresh token available");
    }
    const response = await axios.post(
      `${API_URL}auth/refresh`,
      {
        refreshToken: refreshToken,
      }
    );
    ``;
    const { accessToken, refreshToken: newRefreshToken } = response.data;
    // Save new tokens
    await saveTokens(accessToken, newRefreshToken);

    console.log(newRefreshToken);
    return accessToken;
  } catch (error) {
    console.error("Failed to refresh access token", error);
    await removeTokens();
    return null;
  }
};

client.interceptors.response.use(
  (response) => {
    if (!response.data) { // if data has falsy value
      toast.show({
        type: "error",
        description: "External service error",
      })
    }
    return response;
  },
  async (error) => {
    const originalRequest = error.config;
    if (error.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;

      const newAccessToken = await refreshAccessToken();
      if (newAccessToken) {
        originalRequest.headers["Authorization"] = `Bearer ${newAccessToken}`;
        return client(originalRequest);
      }
    }

    if (error.response?.status > 403) {
      navigate("Error")
    }

    if (error.response?.status >= 500)
      toast.show({ // show in any error
        type: "error",
        description: "External service error",
      })

    return Promise.reject(error);
  }
);

export default client;
