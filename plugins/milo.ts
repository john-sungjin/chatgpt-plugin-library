// Use the Milo plugin to lookup how parents can help create magic moments / meaningful memories with their families everyday. Milo can answer - what's magic today?
namespace Milo {

// Get daily suggestions from Milo about how to create a magical moment or meaningful memory for parents. Milo can only answer 'what's magic today?'
type askMilo = (_: {
// This should always be 'what's magic today?'
query: string,
}) => any;

} // namespace Milo