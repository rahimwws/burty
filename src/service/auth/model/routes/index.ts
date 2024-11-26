import { client, clientWithoutToken } from "@/shared/api";
import axios, { isAxiosError } from "axios";
export const auth = {
  async register(email: string, password: string, role: "MENTOR" | "USER") {
    return await clientWithoutToken.post("/auth/registration", {
      email,
      password,
      role,
    });
  },
  async login(email: string, password: string) {
    try {
      return await clientWithoutToken.post("/auth/login", {
        email,
        password,
      });
    } catch (error) {
      if (isAxiosError(error)) console.log(error.response);
    }
  },

  async verify(id: string, code: string) {
    return await clientWithoutToken.patch(`/auth/${id}/verify`, {
      verificationCode: code,
    });
  },

  async forgotPassword(email: string) {
    return await clientWithoutToken.post("/auth/forgot-password", { email });
  },
  async verifyPassword(id: string, code: string) {
    return await clientWithoutToken.patch(
      `/auth/forgot-password/${id}/verify`,
      {
        verificationCode: code,
      }
    );
  },

  async newPassword(password: string) {
    return await client.post("/auth/reset-password", {
      password,
    });
  },
};
