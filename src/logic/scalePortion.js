// Returns a NEW recipe with ingredient quantities scaled for newServings.
// The original recipe is not changed, so the hardcoded data stays safe.
export function scalePortion(recipe, newServings) {
  const servings = Number(newServings);

  // Ignore bad input (0, negative, empty, not a number)
  if (!servings || servings <= 0 || !recipe.servings) return recipe;

  const factor = servings / recipe.servings;

  return {
    ...recipe,
    servings,
    ingredients: recipe.ingredients.map((item) => ({
      ...item,
      quantity: Math.round(item.quantity * factor * 100) / 100, // 2 decimals
    })),
  };
}