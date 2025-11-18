import express from "express";
import bodyParser from "body-parser";
import pg from "pg";
const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

const db =new pg.Client({
  user:"postgres",
  host:"localhost",
  database:"world",
  password:"firebolt",
  port:"5432"
})
db.connect();
let countries_visited=[];
async function dataFetching(){
  const result = await  db.query("SELECT* FROM visited_countries")
  try{
    countries_visited=result.rows
  }catch(err){
    console.log(err.stack)
  }
}

let countries_data=[];

app.get("/", async (req, res) => {
  //Write your code here.
  let countries=[];
  await dataFetching()
  for(let i=0;i<countries_visited.length;i++){
    countries[i]=countries_visited[i].country_code
  }

  res.render("index.ejs",{countries:countries,total:countries_visited.length})
});

let input=[];

app.post("/add",async (req,res)=>{
  input=req.body["country"];
// Fetch matching country_code
  const result = await db.query(
    "SELECT country_code FROM countries WHERE country_name ILIKE '%'||$1||'%';",
    [input]
  );

  countries_data = result.rows;

  console.log(countries_data);
  if(countries_data.length!==0){
    await db.query("INSERT INTO visited_countries (country_code) VALUES($1)",[countries_data[0].country_code])

    await dataFetching()
    res.redirect("/")
  }

 
})

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
let countries=[];
await dataFetching()
for(let i=0;i<countries_visited.length;i++){
  countries[i]=countries_visited[i].country_code
}
console.log(countries)




