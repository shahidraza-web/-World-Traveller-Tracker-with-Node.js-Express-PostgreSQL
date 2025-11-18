# -World-Traveller-Tracker-with-Node.js-Express-PostgreSQL
🌍 World Traveller Tracker
A simple and interactive Node.js + Express + PostgreSQL application that lets users track the countries they have visited. The project stores country data in a PostgreSQL database and dynamically displays the visited countries count using EJS templates.

 ![Image Alt](https://github.com/shahidraza-web/-World-Traveller-Tracker-with-Node.js-Express-PostgreSQL/blob/4c3e823dd4f8d45164e391fa465ccd9669143c50/traveltracker1.jpg)




🚀 Features
1.Add a country to your visited list by typing its name.
2.Prevents duplicate entries with clear error messages.
3.Validates country names using a master countries table.
4.Displays total number of visited countries.
5.Fully asynchronous using async/await.
6.Uses EJS for server-side rendered pages.


🛠️ Tech Stack
1.Node.js
2.Express.js
3.PostgreSQL
4.EJS
5.body-parser


📦 Database Structure

countries:

column	           type
country_code	    VARCHAR
country_name	    TEXT

visited_countries:

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
