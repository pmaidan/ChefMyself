const modules = import.meta.glob("./recipes/*.json", { eager: true });

export const allRecipes = Object.values(modules).map((m) => m.default);
export const DEFAULT_IMAGE = "/images/default_plate.jpg"; 
export function getRecipeById(id) {
  return allRecipes.find((recipe) => recipe.id === id);
}