import axios from "axios";

import {
  getAccessToken,
  getRefreshToken,
  saveTokens,
  removeTokens,
} from "../token/storage";

const client = axios.create({
  baseURL: "http://localhost:5005/api",
  headers: {
    "Content-Type": "application/json",
  },
});

export const clientWithoutToken = axios.create({
  baseURL: "http://localhost:5005/api",
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
      "http://localhost:5005/api/auth/refresh",
      {
        refreshToken: refreshToken,
      }
    );
    ``;

    const { accessToken, refreshToken: newRefreshToken } = response.data;
    // Save new tokens
    await saveTokens(accessToken, newRefreshToken);

    return accessToken;
  } catch (error) {
    console.error("Failed to refresh access token", error);
    await removeTokens();
    return null;
  }
};

client.interceptors.response.use(
  (response) => response,
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

    return Promise.reject(error);
  }
);

export default client;
