
export function getRandomMeal(recipes, filters = {}, excludeId = null) {
  const matchingRecipes = recipes.filter((recipe) => {
    const matchesMealType =
      !filters.mealType || recipe.mealType?.includes(filters.mealType);

    const matchesPrepTime =
      !filters.prepTime ||
      recipe.cookTimeMinutes <= Number(filters.prepTime);

    const matchesCalories =
      !filters.calories ||
      recipe.nutritionPerServing.calories <= Number(filters.calories);

    const isNotExcluded = recipe.id !== excludeId;

    return (
      matchesMealType &&
      matchesPrepTime &&
      matchesCalories &&
      isNotExcluded
    );
  });

  if (matchingRecipes.length === 0) {
    return null;
  }

  const randomIndex = Math.floor(
    Math.random() * matchingRecipes.length
  );

  return matchingRecipes[randomIndex];
}
