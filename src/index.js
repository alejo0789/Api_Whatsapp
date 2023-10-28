const express=require("express")
const apiRouter=require("./routes/routes")

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
app.use("/whatsapp", apiRouter)


app.listen(PORT, ()=> {console.log("el puerto es :" +PORT)})