import { format } from "date-fns";

export const changeTitle = (newTitle) => {
  document.getElementsByTagName("title")[0].textContent = newTitle;
};
export const formatDate = (date) => format(new Date(date), "LLLL d, yyyy");

export const prepareErrorsText = (errors) =>
  Object.entries(errors).map((error) => error.reduce((key, value) => `${key} ${value}`));
