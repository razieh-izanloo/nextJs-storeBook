export const slugify = (title: string) => {
  return title
    .toLowerCase()
    .replace(/[:–—\s]+/g, "-")
    .replace(/[^\w\u0600-\u06FF-]+/g, "")
    .replace(/^-+|-+$/g, "") 
}
