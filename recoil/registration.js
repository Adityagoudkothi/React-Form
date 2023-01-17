import { atom } from "recoil";

export const registration = atom({
  key: "registration",
  default: {
    name: "",
    email: "",
    mobile: "",
    password: "",
    formErrors: {
        name: "",
        email: "",
        mobile: "",
        password: "",
    },
    submitError: "",
    formValid: false,
  },
});