const express=require('express');
const app=express();
const path=require("path");
const hbs= require("hbs");
const port= process.env.PORT || 8000;


const static_path=path.join(__dirname, "./frontend");
const template_path= path.join(__dirname, "./frontend/views");
const partials_path= path.join(__dirname, "./frontend/partials");

app.use(express.static(static_path));
app.use(express.json());
app.use(express.urlencoded({extended:false}));

app.set("view engine", "hbs");
app.set("views", template_path);
hbs.registerPartials(partials_path);

app.get("/", (req,res)=>{
    res.render("index")
});

app.listen(port, () => {
    console.log(`Server successfully running on port ${port}`);
  });