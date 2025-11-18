# -World-Traveller-Tracker-with-Node.js-Express-PostgreSQL
🌍 World Traveller Tracker
A simple and interactive Node.js + Express + PostgreSQL application that lets users track the countries they have visited. The project stores country data in a PostgreSQL database and dynamically displays the visited countries count using EJS templates.

 ![Image Alt](https://github.com/shahidraza-web/-World-Traveller-Tracker-with-Node.js-Express-PostgreSQL/blob/4c3e823dd4f8d45164e391fa465ccd9669143c50/traveltracker1.jpg)
 ![Image Alt](https://github.com/shahidraza-web/-World-Traveller-Tracker-with-Node.js-Express-PostgreSQL/blob/a3080ca677a754e06df2a05f6bf3f4667d17397a/traveltracker2.jpg)




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


📸 How It Works
1.User enters a country name
2.App checks if the country exists in the countries table
3.Extracts country_code and inserts it into visited_countries
4.Prevents duplicates and catches invalid entries
5.Renders updated data on the homepage

💡 Future Improvements
1.Add a world map that highlights visited countries
2.User authentication
3.Add delete functionality
4.Track visited cities

Execution Files download link: https://drive.google.com/drive/folders/1FZWQ1_hpxw2iHVNIYjtFO7k6BAvmKdDi?usp=sharing 

INSTALLATION INSTRUCTIONS:
1. Make two tables in Postgres named countries and visited_countries
   
    CREATE TABLE countries (
  country_code VARCHAR(5) PRIMARY KEY,
  country_name TEXT NOT NULL
);

CREATE TABLE visited_countries (
  country_code VARCHAR(5) PRIMARY KEY
);

2. Now import countries data from countries.csv file to countries table using postgres import functionality.
3. Change directory to this projects folder in the terminal and run " npm i " command to install all the dependencies.
4. change the password and required fields inside pg.client according to your postgres set up.
5. Ctrl+s  and then run node index.js 
