// Use the Biden remarks API to answer questions about statements (spoken or written) made by President Biden. Use the calendar API to answer questions about the White House official calendar. Use the Roll Call API to search for news articles related to Congressional people and proceedings.
namespace fiscalnote {

// Get Calendar For Date
type get_calendar_for_date_white_house_calendar__date__get = (_: {
date: string,
}) => any;

// List Biden Remarks
type list_biden_remarks_remarks_biden__get = (_: {
q?: string,
}) => any;

// Search Articles
type search_articles_roll_call_articles__get = (_: {
q?: string,
}) => any;

// Read Root
type read_root__get = () => any;

} // namespace fiscalnote