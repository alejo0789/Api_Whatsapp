const whatsappModel= require("../shared/whatsappmodels")
const whatsappservice= require("../services/whatsappservice")
const flaskservice= require("../services/flask_service")
//const openaiservice=require("../services/opeaiservice")
const fs = require("fs");
const { spawn } = require('child_process');
const my_console = new console.Console(fs.createWriteStream("./logs3.txt"))

async function processMessage(text, number){

    text=text.toLowerCase()

    var models=[]
    my_console.log('entra gpt 1'+text)

    const saludos = ["hola", "buenos días", "buenas tardes", "buenas noches", "hey", "¿cómo estás?", "qué tal", "saludos", "hi"];
    const despedidas = ["adiós","adiós", "hasta luego", "hasta pronto", "nos vemos", "chao", "ciao", "bye", "que tengas un buen día"];
    if (saludos.some(saludo => text.includes(saludo))) {
      var model =whatsappModel.messageList(number)
      
      whatsappservice.sendMessageWhatsapp(model)
       // models.push(model)
    }

    
  else if (despedidas.some(despedida => text.includes(despedida))) {
      var model =whatsappModel.messagebye(number)
      
      whatsappservice.sendMessageWhatsapp(model)
     // models.push(model)
  }
    
    
    
    /*if(text.includes("hola")){
        var model =whatsappModel.messageList(number)
      
       
        models.push(model)
    }*/
    

    else if(text.includes("ahorro")){


   //  openaiservice.completeText('once upon time')
     // .then((completedtext) => {
      //  var model =whatsappModel.messageText(completedtext, number)
    //whatsappservice.sendMessageWhatsapp(model)
    flaskservice.sendMessageflask(text)
    //my_console.log(model)
    //console.log(text);
    //my_console.log('entra gpt2'+completedtext)
     }
    





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