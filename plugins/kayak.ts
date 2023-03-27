// Search flights, stays & rental cars or get recommendations where you can go on your budget
namespace KAYAK {

// Search flights on a flight route for certain dates
type searchFlights = (_: {
// The origin from which the flight starts. Will be approximated if not specified.
origin?: string,
// The destination to which the flight goes
destination?: string,
// Departure date of the flight at the origin
departDate?: string,
// Return date of the flight. Only required for round trip flights
returnDate?: string,
// Number of adults that are flying
numAdults?: number,
// Number of children that are flying
numChildren?: number,
// Only show non-stop flights
nonStopOnly?: boolean,
}) => any;

// Search stays for certain dates
type searchStays = (_: {
// The city where you need a stay
destination?: string,
// Optional landmark to refine the location
landmark?: string,
// Optional address to refine the location
address?: string,
// Check in date
checkinDate?: string,
// Check out date
checkoutDate?: string,
// Number of adults that are staying.
numAdults?: number,
// Number of children that are staying
numChildren?: number,
// Number of rooms needed
numRooms?: number,
// Minimum number of stars the accommodation should have
minNumStars?: number,
}) => any;

// Search rental cars for certain dates
type searchCars = (_: {
// The location where you want to pick your rental car
origin?: string,
// The location where you want to drop off your rental car. Will take the origin if no other location is given.
destination?: string,
// The date when you want to pick up your rental car
pickupDate?: string,
// Rental car pick up hour in 24-hour format. Optional parameter that defaults to noon.
pickupHour?: number,
// The date when you want to drop off your rental car
dropoffDate?: string,
// Rental car drop off hour in 24-hour format. Optional parameter that defaults to noon.
dropoffHour?: number,
}) => any;

// Find places to go on a budget. This endpoint will return destinations that can be reached by plane within the given budget.
type explore = (_: {
// The origin from which the flight starts. Will be approximated if not specified.
origin?: string,
// Optional list of cities that are requested to be included in the results, if prices are available.
destinationHints?: string[],
// Departure date of the flight at the origin
departDate?: string,
// Return date of the flight. Must be specified when a departure date is given.
returnDate?: string,
// Expected cost of round trip flight ticket for one person
budgetUsd?: number,
// Only show non-stop flights
nonStopOnly?: boolean,
// Set to true if travel on specific dates is requested. The default is flexible travel within a time period.
useExactDates?: boolean,
// Minimum duration that the suggested trips should have. Expressed in the number of days
minDays?: number,
// Maximum duration that the suggested trips should have. Expressed in the number of days
maxDays?: number,
}) => any;

// This endpoint can be used when the flight route is known yet the travel dates are flexible. For example a user may say they want to travel for 2 weeks whenever air fares are the lowest.
type flightInsights = (_: {
// The origin from which the flight starts. Will be approximated if not specified.
origin?: string,
// The destination to which the flight goes
destination?: string,
// Departure date of the flight at the origin
departDate?: string,
// Return date of the flight. Only required for round trip flights
returnDate?: string,
// Only show non-stop pricing if non-stop flights are available on the requested route
nonStopOnly?: boolean,
}) => any;

} // namespace KAYAK