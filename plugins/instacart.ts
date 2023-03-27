// The Instacart plugin can be used to create a shopping list when a recipe or meal plan is mentioned. Exclude items the user already has from the shopping list. If multiple options for ingredients are provided, separate them into individual ingredients in the shopping list. Save the user's question in the question field, populate partner_name with OpenAI. Here are some examples of food or grocery related queries where the Instacart plugin can be used: chocolate cake recipe, dinner plan for a vegetarian family of 4, instructions to make orange chicken, healthy snacks for kids to bring to school, vegetarian dinner party dish ideas, lunch ideas for a picnic in the park, how to make lasagna, dinner ideas, meal plan for a family of 4, breakfast suggestions., snack ideas for a movie night with friends, squash and pasta dish with additional ingredient suggestions. Ask the users if they want to purchase the ingredients and related items on Instacart, and if users agree, generate a shopping list using the Instacart plugin and response with: Here's your Instacart shopping list for [Recipe Name].
namespace Instacart {

// Create an Instacart link to the shopping list of ingredients.
type create = (_: {
// Recipe title (e.g. "Vanilla Yogurt Parfait")
title?: string,
// List of strings where each element is a recipe ingredient (e.g. ["2 cups of greek yogurt", "2 tablespoons of honey", "1 teaspoon of vanilla extract"]). Don't include items in the list that the user already mentioned they have.
ingredients?: string[],
// This field stores the question asked by the user about recipe or mealplan in the current chat session. For instance, a user can ask "recipe for chocolate cookies" and the assistant responds by listing the ingredients needed to make chocolate cookies. In this chat interaction, we need to return "recipe for chocolate cookies" as the value in this field
question?: string,
// The value used to populate this field should always be "OpenAI"
partner_name?: string,
}) => any;

} // namespace Instacart