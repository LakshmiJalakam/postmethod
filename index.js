const express=require("express")
const app=express()
const cors=require("cors")
const bodyParser=require("body-parser")
const port=(2000);
app.use(bodyParser.urlencoded({
	extended:true
}))
app.use(bodyParser.json())
app.use(cors())
app.get("/",(req,res)=>{
	res.send("waiting")
})
app.post("/newData",(req,res)=>{
	const {name,pass,selectedcars}=req.body;
	console.log(name,pass,selectedcars)
	res.send("added successfully")
})

app.listen(port,()=>console.log("server is running"))