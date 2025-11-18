# -World-Traveller-Tracker-with-Node.js-Express-PostgreSQL
🌍 World Traveller Tracker
A simple and interactive Node.js + Express + PostgreSQL application that lets users track the countries they have visited. The project stores country data in a PostgreSQL database and dynamically displays the visited countries count using EJS templates.

 ![Image Alt](image_url)

🚀 Features
Add a country to your visited list by typing its name
Prevents duplicate entries with clear error messages
Validates country names using a master countries table
Displays total number of visited countries
Fully asynchronous using async/await
Uses EJS for server-side rendered pages


🛠️ Tech Stack
Node.js
Express.js
PostgreSQL
EJS
body-parser


📦 Database Structure

countries

column	           type
country_code	    VARCHAR
country_name	    TEXT

visited_countries

column	          type
country_code	    VARCHAR


📸 How It Works
User enters a country name
App checks if the country exists in the countries table
Extracts country_code and inserts it into visited_countries
Prevents duplicates and catches invalid entries
Renders updated data on the homepage

💡 Future Improvements
Add a world map that highlights visited countries
User authentication
Add delete functionality
Track visited cities
