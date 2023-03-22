const fs = require("fs");
const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const my_console = new console.Console(fs.createWriteStream("./logs.txt"))

//const samplemodel= require("../shared/samplemodels")


const processMessage=require("../shared/processMessage")
const Verifytoken =(req, res)=>{



    try{

    var accesstoken="123456789asdfghjkl";
    var token = req.query["hub.verify_token"];
    var challenge= req.query["hub.challenge"];

    if (challenge != null && token != null && token == accesstoken)
    {
     res.send(challenge);

    }
    else
    {
        res.status(400).send();
    }

}
    catch(e){
    res.status(400).send();

    }

   
}

const ReceiveMessage =(req, res) => {

    var text =(req.body["texto"])
    var number = (req.body["number"])

    if (text=="hola"){
    console.log(number)

    processMessage.processMessage(text, number)
    return res.send("EVENT_RECEIVED");

}


//creamos una valuidacion para enviar un mensaje de bienvenida
    if (registro=="hola"){

    texto=registro
    numbero=(req.body["number"])
    processMessage.processMessage(texto, numbero)
    res.send("EVENT_RECEIVED");

}

try {

    var entry =(req.body["entry"])[0]
    var changes =(entry["changes"])[0]
    var value = changes["value"]
    var messageObject = value["messages"]
    
    if(messageObject != "undefined")
    {
    var messages=messageObject[0]
    var text = getTextuser(messageObject[0])
    var number= messages["from"]
    my_console.log(text, messages["from"])
    



   if (text !=""){
   
    processMessage.processMessage(text, number)
 
   }

    /**if(text=="texto")
        {
        var data= samplemodel.sampletext("hola esta respuesta es la que quiero enviar", number)
        whatsappservice.sendMessageWhatsapp(data)
        }
    else if(text=="imagen")
        {
        var data= samplemodel.sampleimage( number)
        whatsappservice.sendMessageWhatsapp(data)
        }
        else if(text=="opciones")
        {
        var data= samplemodel.samplebuttons( number)
        whatsappservice.sendMessageWhatsapp(data)
        }
        else if(text=="video")
        {
        var data= samplemodel.samplevideo( number)
        whatsappservice.sendMessageWhatsapp(data)
        } **/
  
    }
    res.send("EVENT_RECEIVED");
} catch (e) {

    res.send("EVENT_RECEIVED");
    
}






}

function getTextuser(message)
{
var text = ""
var typeMesage = message["type"]
my_console.log(typeMesage)
if (typeMesage=="text")
{
 
    text= (message["text"])["body"]
}
else if (typeMesage=="interactive"){

    var interactiveObject= message["interactive"]
    var typeintercative= interactiveObject["type"]
    my_console.log(typeintercative)
    if(typeintercative=="button_reply"){
    text= (interactiveObject["button_reply"])["title"]
    text.toLowerCase()
    my_console.log(text)

    }
    else if (typeintercative=="list_reply"){
    text= (interactiveObject["list_reply"])["title"]
     }
    else{
    console.log("sin mensaje")
    }
}
else{
    console.log("sin mensaje")
}
return text;
}

module.exports={
    Verifytoken,
    ReceiveMessage
}