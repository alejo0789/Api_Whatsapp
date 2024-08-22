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
            "type": "template",
            "template": {
                "name": "bienvenida_registro",
                "language": {
                    "code": "es"
                },
                "components": [
                    {
                        "type": "header",
                        "parameters": [
                            {
                                "type": "image",
                                "image": {
                                    "link": "https://wp-api-render.onrender.com/public/bienvenida2.jpg"
                                }
                            }
                        ]
                    }
                ]



                
            } }
    )
return data
}
function messageVideo(number){

    const data = JSON.stringify(
        {
            "messaging_product": "whatsapp",    
            "to": number,
            "type": "template",
            "template": {
                "name": "video",
                "language": {
                    "code": "es"
                },
                "components": [
                    {
                        "type": "header",
                        "parameters": [
                            {
                                "type": "video",
                                "video": {
                                    "link": "https://wp-api-render.onrender.com/images/video_pin.mp4"
                                }
                            }
                        ]
                    }
                ]



                
            } }
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
                "caption": "Tus finanzas"
            }
        }
    )
return data

}

function  messageLinkExcel(number){
    const link="para ver tu estado financiero y todos tus gastos solo ingresa a www.fiwapi.com";
        const data = JSON.stringify(
            {
                "messaging_product": "whatsapp",    
                "to": number,
                "type": "text",
                "text": {
                    
                    "body": link
                }
            }
        )
    return data
    
    
    }







module.exports ={
    messageText, 
    messageRegister, 
    messageVideo,
    messageList,
    messagebye,
    messageLinkExcel,
    messageTextUrl,
     messageSaveit,
     messagefile
}
