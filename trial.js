const expressc= require("express")
const express= require("express");
const { route } = require("./routes/projects");
const app = express()
const path= require('path')

app.set("view engine","ejs")
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')));

app.use(express.urlencoded({ extended: true }))

app.use("/projects", require('./routes/projects'))

app.listen(8080,()=>{console.log("server started")})






