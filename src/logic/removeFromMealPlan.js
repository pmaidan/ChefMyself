// Returns a NEW meal plan without the meal that has this instanceId.
// It uses instanceId (not the recipe id), so other copies of the
export function removeFromMealPlan(mealPlan, instanceId) {
  return mealPlan.filter((meal) => meal.instanceId !== instanceId);
}