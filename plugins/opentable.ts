// Allows you to search a comprehensive database of restaurants, from Michelin-starred fine dining establishments to trendy cafes and casual eateries, available throughout the world for breakfast, lunch or dinner as well as various curated dining experiences, take out orders and dining news feed from your favorite restaurateurs and michelin star chefs
namespace opentable_v2 {

// API used to search OpenTable's restaurant listings given a natural language query containing description of desired location and reservation time
type searchRestaurants = (_: {
// Natural language search query for a restaurant reservation with optional location and reservation time, which can be either breakfast, lunch or dinner
query: string,
// Location of where the user wants to dine
location: string,
// Latitude of location where the user wants to dine
latitude?: number,
// Longitude of location where the user wants to dine
longitude?: number,
// Date of when the user want to dine in format yyyy-MM-dd, for example 2023-10-13
date?: string,
// Day of week of when the user want to dine
day_of_week?: string,
// Time of day of when the user want to dine in format HH:mm, for example 13:15
time_of_day?: string,
// Meal type the user wants to book the reservation for. For example lunch, breakfast, dinner
meal?: string,
// Occasion of why the user wants to book the reservation For example business lunch, date, birthday, celebration
occasion?: string,
// Number of people who will be dining for the desired reservation
party_size?: number,
// Radius in miles to search around the location of where the desired restaurant is centered
radius?: number,
}) => any;

} // namespace opentable_v2