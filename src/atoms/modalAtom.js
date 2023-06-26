import { atom } from "recoil";
export const modalState = atom({
  key: "modalState",
  default: false,
});
export const categoryState = atom({
  key: "categoryState",
  default: "general",
});
export const confirmationModal = atom({
  key: "confirmationModal",
  default: false,
});
export const modalAddEmployee = atom({
  key: "modalAddEmployee",
  default: false,
});
