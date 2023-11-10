const whatsappModel= require("../shared/whatsappmodels")
const whatsappservice= require("../services/whatsappservice")
const flaskservice= require("../services/flask_service")
//const openaiservice=require("../services/opeaiservice")
const fs = require("fs");
const { spawn } = require('child_process');
const my_console = new console.Console(fs.createWriteStream("./logs3.txt"))
const regex = /^(?=.*\d)[\d.,a-zA-Z0-9áéíóúÁÉÍÓÚüÜñÑ\s]{4,}$/;

async function processMessage(text, number){

    text=text.toLowerCase()
    
    var models=[]
 

    const saludos = ["hola", "buenos días", "buenas tardes", "buenas noches", "hey", "¿cómo estás?", "qué tal", "saludos", "hi"];
    const despedidas = ["adiós","adiós", "hasta luego", "hasta pronto", "nos vemos", "chao", "ciao", "bye", "que tengas un buen día"];
    if (saludos.some(saludo => text.includes(saludo))) {
      var model =whatsappModel.messageList(number)
      
      whatsappservice.sendMessageWhatsapp(model)
       // models.push(model)
    }
   else if (text.includes("registro_inicial")) {
    
      var model =whatsappModel.messageRegister(number)
      var model_video= whatsappModel.messageVideo(number)
      whatsappservice.sendMessageWhatsapp(model)
      whatsappservice.sendMessageWhatsapp(model_video)
   
       // models.push(model)
    }
  else if (text.includes("video_inicial")) {
    
  
      var model_video= whatsappModel.messageVideo(number)
  
      whatsappservice.sendMessageWhatsapp(model_video)
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
    
  else if (regex.test(text)) {
      
      flaskservice.sendMessageflask(text, number)
      var model =whatsappModel.messageSaveit(number)
      whatsappservice.sendMessageWhatsapp(model)
        
      

    } 
    //else if(text.includes("ahorro")){


   //  openaiservice.completeText('once upon time')
     // .then((completedtext) => {
      //  var model =whatsappModel.messageText(completedtext, number)
    //whatsappservice.sendMessageWhatsapp(model)
   // flaskservice.sendMessageflask(text, number)
    //my_console.log(model)
    //console.log(text);
    //my_console.log('entra gpt2'+completedtext)
     //}
    



     else if(text.includes("excel")){
      //var model =whatsappModel.messageText("Ya te envio tu resuemn de finanzas", number)
      var model = whatsappModel.messagefile(number)
      whatsappservice.sendMessageWhatsapp(model)



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
