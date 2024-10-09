import dotenv from "dotenv"
import connectDB from "./utils/dbConnect.js";
import {app} from './app.js'
dotenv.config({
    path: './.env'
})

app.listen(process.env.PORT|| 8000,()=>{
    console.log(`⚙️ Server is running at port : ${process.env.PORT}`);
    
})

// connectDB()
//   .then(() => {
//     app.listen(process.env.PORT || 3000, () => {
//       console.log(`⚙️ Server is running at port : ${process.env.PORT}`);
//     });
//   })
//   .catch((err) => {
//     console.log("MONGO db connection failed !!! ", err);
//   });
