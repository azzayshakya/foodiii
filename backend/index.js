const express = require('express')
const mongoose=require('mongoose')
const app = express()
const port = 7000
const mongoDB =require("./db")
mongoDB();

const cors = require('cors');

app.use(cors({
  origin: '*',
  credentials: true, 
}));



app.get('/', (req, res) => {
  res.send(`Azzay Your Foodiii app listening on port ${port}`)
})

// app.use((req,res,next)=>{
//   res.setHeader("Access-Control-Allow-Origin","http://localhost:3000");
//   res.header("Access-Control-Allow-Headers",
//   "Origin,X-Requested-With,Content-Type,Accept"
//   );
//   next();
// })


app.use(express.json());
app.use("/api/",require("./Routes/CreateUser"));
app.use("/api/",require("./Routes/foodData"));
app.use("/api/",require("./Routes/OrderData"));
app.use("/api",require("./Routes/myOrderData"));
app.use("/api",require("./Routes/BabesOrder"));



app.listen(port, () => {
  console.log(`Your app listening on port ${port}`)
})

