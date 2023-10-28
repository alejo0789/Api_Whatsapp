const personalmessages= require("../shared/personalmessages")

function messageText(textresponse, number){

    const data = JSON.stringify(
        {
            "messaging_product": "whatsapp",    
            "to": number,
            "type": "text",
            "text": {
                
                "body": textresponse
            }
        }
    )
return data


}

function  messageList(number){
const saludo=personalmessages.saludoControlGastos();
    const data = JSON.stringify(
        {
            "messaging_product": "whatsapp",    
            "to": number,
            "type": "text",
            "text": {
                
                "body": saludo
            }
        }
    )
return data


}

function messageRegister( number){

    const data = JSON.stringify(
        {
            "messaging_product": "whatsapp",    
            "to": number,
            "type": "text",
            "text": {
                "preview_url": true,
                 "body": "https://wp-api-render.onrender.com/images/bienvenida.jpg "
            }
        }
    )
return data
}



function  messageSaveit(number){
    const messagge_saved=personalmessages.generatesaveinformation();
        const data = JSON.stringify(
            {
                "messaging_product": "whatsapp",    
                "to": number,
                "type": "text",
                "text": {
                    
                    "body": messagge_saved
                }
            }
        )
    return data

    
}

function  messagebye(number){
    const despedida=personalmessages.generateGoodbyeMessage();
        const data = JSON.stringify(
            {
                "messaging_product": "whatsapp",    
                "to": number,
                "type": "text",
                "text": {
                    
                    "body": despedida
                }
            }
        )
    return data
    
    
    }
/*
function messageList(number){

    const data = JSON.stringify(
        {
            "messaging_product": "whatsapp",
            "recipient_type": "individual",
            "to": number,
            "type": "interactive",
            "interactive": {
                "type": "list",
                "header": {
                    "type": "text",
                    "text": "Hola, soy verne tu guia de viajes"
                },
                "body": {
                    "text": "Estoy aca para guiarte y mostrarte de manera personalizada los mejores ejercicios para ti"
                },
                "footer": {
                    "text": "Que deseas entrenar hoy ?"
                },
                "action": {
                    "button": "opciones",
                    "sections": [
                        {
                            "title": "Parte superior",
                            "rows": [
                                {
                                    "id": "001",
                                    "title": "Pectoral / Pecho ",
                                    
                                },
                                {
                                    "id": "002",
                                    "title": "Espalda",
                                   
                                },

                                {
                                    "id": "003",
                                    "title": "Hombros",
                                   
                                },

                                {
                                    "id": "004",
                                    "title": "Biceps",
                                   
                                },

                                {
                                    "id": "005",
                                    "title": "Triceps",
                                   
                                },

                            ]
                        },
                        {
                            "title": "Parte inferior",
                            "rows": [
                                {
                                    "id": "006",
                                    "title": "Pierna",
                                    
                                },
                                {
                                    "id": "07",
                                    "title": "Gluteos",
                                    
                                }
                            ]
                        }
                    ]
                }
            }
        }
    )
return data


}

*/
function messageTextUrl( number, url){

    const data = JSON.stringify(
        {
            "messaging_product": "whatsapp",    
            "to": number,
            "type": "text",
            "text": {
                "preview_url": true,
                 "body": "  https://www.youtube.com/watch?v=oCGS6iBIfL8  "
            }
        }
    )
return data

}
function messagefile( number, url){

    const data = JSON.stringify(
        {
            "messaging_product": "whatsapp",
            "recipient_type": "individual",
            "to": number,
            "type": "document",
            "document": {
                "link": "https://f-server2.onrender.com/sendfile/"+number,
                "caption": "<DOCUMENT_CAPTION_TEXT>"
            }
        }
    )
return data









}

module.exports ={
    messageText, 
    messageRegister, 
    messageList,
    messagebye,
   
    messageTextUrl,
     messageSaveit,
     messagefile
}
