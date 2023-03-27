// Zapier can talk to any of 20k+ app actions the user has chosen to expose. More actions can be exposed by asking the user to visit https://nla.zapier.com/openai/actions/. All markdown links are relative to https://zapier.com/.
namespace Zapier {

// If the user wants to execute actions that are not exposed, they can
// go here to configure and expose more.
type get_configuration_link = () => any;

// List all the currently exposed actions for the given account.
type list_exposed_actions = () => any;

// Gmail: Create Draft (redactedId)
// When the response status=preview, always send the user to review_url to confirm and run the action.
type gmail_create_draft_redactedId = (_: {
// Plain english instructions. Provide as much detail as possible.
instructions: string,
Subject?: string,
Body?: string,
// Who will this email be sent to? Multiple email addresses can be entered either individually, or as a comma separated list, eg. `test@example.com,example@example.com`.
To?: string,
}) => any;

} // namespace Zapier