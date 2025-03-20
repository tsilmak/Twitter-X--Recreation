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
    sendEmailConfirmationCode: builder.mutation<string, { username: string }>({
      query: ({ username }) => ({
        url: "auth/email/code",
        method: "POST",
        body: { username },
      }),
      invalidatesTags: ["Users"],
    }),
    verifyEmailConfirmationCode: builder.mutation<
      User,
      { code: string; username: string }
    >({
      query: ({ code, username }) => ({
        url: "auth/email/code/verify",
        method: "POST",
        body: { code, username },
      }),
      invalidatesTags: ["Users"],
    }),
  }),
});

export const {
  useRegisterUserMutation,
  useSendEmailConfirmationCodeMutation,
  useVerifyEmailConfirmationCodeMutation,
} = authApi;
