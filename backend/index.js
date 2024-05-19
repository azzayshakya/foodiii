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

// const SECRET = 'aslkdjlkaj10830912039jlkoaiuwerasdjflkasd';
// const SECRET_2 = 'ajsdklfjaskljgklasjoiquw01982310nlksas;sdlkfj';

// const addUser = async (req, res, next) => {
//   const token = req.headers['x-token'];
//   if (token) {
//     try {
//       const { user } = jwt.verify(token, SECRET);
//       req.user = user;
//     } catch (err) {
//       const refreshToken = req.headers['x-refresh-token'];
//       const newTokens = await refreshTokens(token, refreshToken, models, SECRET, SECRET_2);
//       if (newTokens.token && newTokens.refreshToken) {
//         res.set('Access-Control-Expose-Headers', 'x-token, x-refresh-token');
//         res.set('x-token', newTokens.token);
//         res.set('x-refresh-token', newTokens.refreshToken);
//       }
//       req.user = newTokens.user;
//     }
//   }
//   next();
// };


app.use(express.json());
app.use("/api/",require("./Routes/CreateUser"));
app.use("/api/",require("./Routes/foodData"));
app.use("/api/",require("./Routes/OrderData"));
app.use("/api/",require("./Routes/myOrderData"));
app.use("/api/",require("./Routes/BabesOrder"));
app.use("/api/",require("./Routes/UpdateState"))


app.listen(port, () => {
  console.log(`Your app listening on port ${port}`)
})

