import express from "express"
import fetch from "node-fetch"

const app = express();
app.set('view engine', 'ejs');

app.use(express.urlencoded({extended: true}));
app.use(express.static("public"));

let posts = [];
let quote ="fsdfsd";
  const options = {  method: 'GET', 
	   headers: {'X-RapidAPI-Host': 'quotes15.p.rapidapi.com', 'X-RapidAPI-Key':     
      '3439c934e3msh6a5e71e9f12c7cbp1f7db1jsn0c2514fd4264'} 
      
          }; 

      

app.get("/",function(req,res){
  fetch('https://quotes15.p.rapidapi.com/quotes/random/', options) 
  .then(response => response.json()) 
  .then(response => quote = response.content) 
  .catch(err => console.error(err)) 

    res.render("home",{posts:posts,quote:quote})
})


app.post("/",function(req,res){

  const post = req.body.postBody;
  if(post === "") posts.push(quote)
  else posts.push(post)
  res.redirect("/")
})



  


app.listen("3000",function(){
    console.log("Server is running at port 3000")
})





