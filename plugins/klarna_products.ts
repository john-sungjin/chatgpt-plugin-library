
// Use the Klarna plugin to get relevant product suggestions for any shopping or researching purpose. The query to be sent should not include stopwords like articles, prepositions and determinants. The api works best when searching for words that are related to products, like their name, brand, model or category. Links will always be returned and should be shown to the user.
namespace KlarnaProducts {

// API for fetching Klarna product information
type productsUsingGET = (_: {
// query, must be between 2 and 100 characters
q: string,
// number of products returned
size?: number,
// maximum price of the matching product in local currency, filters results
budget?: number,
}) => any;

} // namespace KlarnaProducts