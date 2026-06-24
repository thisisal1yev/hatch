export type Role = "talent" | "startup";

export type RegisterValues = {
  role: Role | null;
  // account
  name: string;
  email: string;
  password: string;
  // talent profile
  headline: string;
  city: string;
  grade: string;
  // startup profile
  company: string;
  stage: string;
  website: string;
};

export const emptyRegister: RegisterValues = {
  role: null,
  name: "",
  email: "",
  password: "",
  headline: "",
  city: "",
  grade: "",
  company: "",
  stage: "",
  website: "",
};
