const express=require("express")
const apiRouter=require("./routes/routes")

const app = express();

const PORT=process.env.PORT || 3000;

app.use(express.json())
app.use(express.static('src/public', (err) => {
    if (err) {
      console.error('Error serving static files:', err);
    }
  }));
  app.use(express.static('./src/public', (err) => {
    if (err) {
      console.error('Error serving static files:', err);
    }
  }));
app.use('/images', express.static('/src/images'));
app.use("/whatsapp", apiRouter)


app.listen(PORT, ()=> {console.log("el puerto es :" +PORT)})