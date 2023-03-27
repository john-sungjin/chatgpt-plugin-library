// # Prompt 20230322
// Use the Speak plugin when the user asks a question about another language, like: how to say something specific, how to do something, what a particular foreign word or phrase means, or a concept/nuance specific to a foreign language or culture.
// Call the Speak plugin immediately when you detect language learning intention, or when the user asks for a language tutor or foreign language conversational partner.
// Use the "translate" API for questions about how to say something specific in another language. Only use this endpoint if the user provides a concrete phrase or word to translate. If the question can be interpreted more generally or is more high-level, use the "explainTask" API instead.
// Examples: "how do i say 'do you know what time it is?' politely in German", "say 'do you have any vegetarian dishes?' in spanish"
// Use the "explainTask" API when the user asks how to say or do something or accomplish a task in a foreign language, but doesn't specify a concrete phrase or word to translate.
// Examples: "How should I politely greet shop employees when I enter, in French?" or "How do I compliment someone in Spanish on their shirt?"
// Use the "explainPhrase" API to explain the meaning and usage of a specific foreign language phrase.
// Example: "what does putain mean in french?"
// When you activate the Speak plugin:
// - Make sure you always use the "additional_context" field to include any additional context from the user's question that is relevant for the plugin's response and explanation - e.g. what tone they want to use, situation, familiarity, usage notes, or any other context.
// - Make sure to include the full and exact question asked by the user in the "full_query" field.
// In your response:
// - Pay attention to instructions given in "extra_response_instructions" key in JSON API response.
namespace speak {

// Translate and explain how to say a specific phrase or word in another language.
type translate = (_: {
// Phrase or concept to translate into the foreign language and explain further.
phrase_to_translate?: string,
// The foreign language that the user is learning and asking about. Always use the full name of the language (e.g. Spanish, French).
learning_language?: string,
// The user's native language. Infer this value from the language the user asked their question in. Always use the full name of the language (e.g. Spanish, French).
native_language?: string,
// A description of any additional context in the user's question that could affect the explanation - e.g. setting, scenario, situation, tone, speaking style and formality, usage notes, or any other qualifiers.
additional_context?: string,
// Full text of the user's question.
full_query?: string,
}) => any;

// Explain the meaning and usage of a specific foreign language phrase that the user is asking about.
type explainPhrase = (_: {
// Foreign language phrase or word that the user wants an explanation for.
foreign_phrase?: string,
// The language that the user is asking their language question about. The value can be inferred from question - e.g. for "Somebody said no mames to me, what does that mean", the value should be "Spanish" because "no mames" is a Spanish phrase. Always use the full name of the language (e.g. Spanish, French).
learning_language?: string,
// The user's native language. Infer this value from the language the user asked their question in. Always use the full name of the language (e.g. Spanish, French).
native_language?: string,
// A description of any additional context in the user's question that could affect the explanation - e.g. setting, scenario, situation, tone, speaking style and formality, usage notes, or any other qualifiers.
additional_context?: string,
// Full text of the user's question.
full_query?: string,
}) => any;

// Explain the best way to say or do something in a specific situation or context with a foreign language. Use this endpoint when the user asks more general or high-level questions.
type explainTask = (_: {
// Description of the task that the user wants to accomplish or do. For example, "tell the waiter they messed up my order" or "compliment someone on their shirt"
task_description?: string,
// The foreign language that the user is learning and asking about. The value can be inferred from question - for example, if the user asks "how do i ask a girl out in mexico city", the value should be "Spanish" because of Mexico City. Always use the full name of the language (e.g. Spanish, French).
learning_language?: string,
// The user's native language. Infer this value from the language the user asked their question in. Always use the full name of the language (e.g. Spanish, French).
native_language?: string,
// A description of any additional context in the user's question that could affect the explanation - e.g. setting, scenario, situation, tone, speaking style and formality, usage notes, or any other qualifiers.
additional_context?: string,
// Full text of the user's question.
full_query?: string,
}) => any;

} // namespace speak