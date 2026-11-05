// Scan all recipes inside the folder at build time
const modules = import.meta.glob("./recipes/*.json", { eager: true });

// Map all the fields into an object array
export const loadedRecipes = Object.values(modules).map(
  (module) => module.default
);