const slugify = (str: string) => {
  return str
    .toLowerCase()
    .replace(/ /g, "-")
    .replace(/[^\w-À-ÖØ-öø-ÿ]+/g, "");
};

export { slugify };
