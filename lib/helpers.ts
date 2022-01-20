export const formatDate = (date: Date) => {
  return Intl.DateTimeFormat("en-GB").format(new Date(date));
};

export const convertToSlug = (str: string) => {
  return str
    .replace(/[`~!@#$%^&*()_\-+=\[\]{};:'"\\|\/,.<>?\s]/g, " ")
    .toLowerCase()
    .replace(/^\s+|\s+$/gm, "")
    .replace(/\s+/g, "-");
};
