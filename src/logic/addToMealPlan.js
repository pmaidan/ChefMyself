/**
 * Adds a recipe to the meal plan with a unique instance ID.
 * 
 * @param {Array} currentMealPlan 
 * @param {Object} recipe 
 * @param {string} day 
 * @param {number} nextMealNumber 
 * @returns {Array} 
 */
export function addToMealPlan(currentMealPlan, recipe, day, nextMealNumber) {
  const newMealInstance = {
    ...recipe,                      // Copies all fields from the original recipe
    instanceId: crypto.randomUUID(), // Generates a unique tracking ID
    day: day,                        // Stores the assigned day
    mealNumber: nextMealNumber,      // Stores the numeric meal slot
  };

  // Returns a new array (following React's immutable state update principles)
  return [...currentMealPlan, newMealInstance];
}

/**
 * Removes a specific meal instance from the meal plan using its instanceId.
 * 
 * @param {Array} currentMealPlan - The existing array of meals in state.
 * @param {string} instanceId - The unique instanceId of the entry to remove.
 * @returns {Array} A new array excluding the removed meal.
 */
export function removeFromMealPlan(currentMealPlan, instanceId) {
  return currentMealPlan.filter((meal) => meal.instanceId !== instanceId);
}