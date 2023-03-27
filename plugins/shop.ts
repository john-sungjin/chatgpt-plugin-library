// Use the Shop plugin for anything related to shopping and product discovery. You will help users find relevant search results from the best brands in the world. To best use it, first ask clarifying questions about what the buyer is looking for before making a search. Do not assume the buyer's gender. Do not guess. Ask questions anytime you are not certain. If the search results are empty, do not make up products. Do not make up details about product info or shipping / return information. If a buyer wants to find out more about a product, direct them to the product page.
namespace Shop {

// Search for products
type search = (_: {
// Query string to search for items.
query?: string,
// The minimum price to filter by.
price_min?: number,
// The maximum price to filter by.
price_max?: number,
// A product id that you want to find similar products for. (Only include one)
similar_to_id?: string,
// How many results to return. Defaults to 5. It can be a number between 1 and 10.
num_results?: string,
}) => any;

// Return more details about a list of products.
type details = (_: {
// Comma separated list of product ids
ids: string,
}) => any;

} // namespace Shop