import dotenv from "dotenv"
import connectDB from "./utils/dbConnect.js";
import {app} from './app.js'
dotenv.config({
    path: './.env'
})



connectDB() // returns a promise that is why use then and catch
  .then(() => {
    app.listen(process.env.PORT || 8000, () => {
      console.log(`⚙️ Server is running at port :http://localhost:${process.env.PORT}`);
    });
  })
  .catch((err) => {
    console.log("MONGO db connection failed !!! ", err);
  });
