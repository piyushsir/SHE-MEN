import app from "./app.js";
import config from "../config.js";

app.listen(3001, () =>{
    console.log(config.app_name+" Started on Port 3001")
})