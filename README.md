7/23 update: 7 db versions later, doesn't function like it was on localhost

# PURPOSE
This site was created with the sole purpose of delivering Cost of Living data on cities across the globe using a foreign exchange rate API (Fixer.io). In these uncertain times, the ability to make an income remotely while living in a city where your money can go farther can be a tantalizing idea.

# INSTRUCTIONS
Create an account to check back periodically for the latest exchange rates for local currency on any number of cities you may have a particular eye on in your watchlist. Exchange rate by default uses the Euro as the base currency due to current API limitations (financially restrictive). Future iterations of this site plan to include data on rent and average cost of a meal + sorting mechanism of high vs low cost cities.

# ROUTES

| Route Method | Path | What for? |
| - | - | - |
| GET | / | Landing page |
| GET | /auth/login | User login page |
| GET | /auth/register | User registration page |
| GET | /auth/logout | Logs out user/terminates current session |
| GET | /profile | Profile page |
| GET | /auth/watchlist | View only the exchange rates for cities that interested you |
| GET | /city | View all cities |
| GET | /city/:id | View individual city |
| GET | /city/:id/add | Decide to add city to watchlist |
| POST | auth/login | Logs the user in after inputting credentials |
| POST | auth/register | Registers the user afer inputting request data |
| POST | auth/watchlist/:id/remove | Action to remove city from watchlist |