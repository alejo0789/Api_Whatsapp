const express=require("express")
const apiRouter=require("./routes/routes")
const fs = require('fs');
const path = require('path');
const app = express();

const PORT=process.env.PORT || 3000;

app.use(express.json())
app.use("/public",express.static(__dirname + "/images", (err) => {
    if (err) {
      console.error('Error serving static files:', err);
    }
  }));
  
app.use("/images", express.static(__dirname + "/images"));
console.log(__dirname)
//pruebas
const directoryPath = path.join(__dirname);
//passsing directoryPath and callback function
fs.readdir(directoryPath, function (err, files) {
    //handling error
    if (err) {
        return console.log('Unable to scan directory: ' + err);
    } 
    //listing all files using forEach
    files.forEach(function (file) {
        // Do whatever you want to do with the file
        console.log(file); 
    });
});











app.use("/whatsapp", apiRouter)


app.listen(PORT, ()=> {console.log("el puerto es :" +PORT)})