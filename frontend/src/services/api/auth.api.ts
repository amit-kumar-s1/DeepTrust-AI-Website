import {
  LoginRequest,
  SignupRequest,
} from "@/types/auth.types";

export async function login(
  data: LoginRequest
) {
  await new Promise((r) =>
    setTimeout(r, 1500)
  );

  return {
    token: "mock_jwt_token",

    user: {
      id: "1",
      name: "DeepTrust User",
      email: data.email,
    },
  };
}

export async function signup(
  data: SignupRequest
) {
  await new Promise((r) =>
    setTimeout(r, 1500)
  );

  return {
    token: "mock_jwt_token",

    user: {
      id: "1",
      name: data.name,
      email: data.email,
    },
  };
}

export async function forgotPassword(
  email: string
) {
  await new Promise((r) =>
    setTimeout(r, 1000)
  );

  return {
    success: true,
  };
}