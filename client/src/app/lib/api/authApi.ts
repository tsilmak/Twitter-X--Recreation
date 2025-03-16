import { apiSlice } from "./apiSlice";

interface User {
  userId: number;
  username: string;
  name: string;
  email: string;
  phoneNumber?: string;
  birthDate: string;
  authorities: [roleId: string, authority: string];
  enabled: boolean;
}

interface RegisterRequest {
  name: string;
  email: string;
  birthDate: string;
}

export const authApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    registerUser: builder.mutation<User, RegisterRequest>({
      query: (body) => ({
        url: "auth/register",
        method: "POST",
        body,
      }),
      invalidatesTags: ["Users"],
    }),
  }),
});

export const { useRegisterUserMutation } = authApi;
