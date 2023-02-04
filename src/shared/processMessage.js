const whatsappModel= require("../shared/whatsappmodels")
const whatsappservice= require("../services/whatsappservice")
//const openaiservice=require("../services/opeaiservice")
const fs = require("fs");
const { spawn } = require('child_process');
const my_console = new console.Console(fs.createWriteStream("./logs3.txt"))

async function processMessage(text, number){

    text=text.toLowerCase()

    var models=[]
    my_console.log('entra gpt 1'+text)
    if(text.includes("hola")){
        var model =whatsappModel.messageList(number)
      
       
        models.push(model)
    }
    

    else if(text.includes("ahorro")){


   //  openaiservice.completeText('once upon time')
     // .then((completedtext) => {
      //  var model =whatsappModel.messageText(completedtext, number)
    whatsappservice.sendMessageWhatsapp(model)
    my_console.log(model)
    console.log(text);
    my_console.log('entra gpt2'+completedtext)
     }
    


    // my_console.log('entra gpt4')
     /*var model =whatsappModel.messageText(text, number)
     //models.push(model)
        var model =whatsappModel.messageTextUrl(number)
        models.push(model)
        var model =whatsappModel.messageText("avisame cuando acabes de entrenar", number)
     
        models.push(model)
      
      
    */


    else if(text.includes("adios")){
        var model =whatsappModel.messageText("Bye bye", number)
        models.push(model)
    }
    else{
        var model =whatsappModel.messageText("no entiendo lo que dices", number)
        models.push(model)

    }

    /**
    models.forEach((model) => {
        whatsappservice.sendMessageWhatsapp(model)
          
      });
      */


      models.forEach((model) => {
        whatsappservice.sendMessageWhatsapp(model)
          .then((response) => {
            // Procesar la respuesta del servidor aquí
            console.log(response);
          })
          .catch((error) => {
            // Procesar cualquier error aquí
            console.error(error);
          });
      });
      
      

}


const waitmessage =(model) =>{

    return  new Promise((resolve, reject) => {
        resolve(whatsappservice.sendMessageWhatsapp(model))
    })
      

}

module.exports={processMessage}