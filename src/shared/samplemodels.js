function sampletext(textresponse, number){

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

function sampleimage( number){

    const data = JSON.stringify(
        {
            "messaging_product": "whatsapp",    
            "to": number,
            "type": "image",
            "image": {
                
                "link": "https://www.springboard.com/blog/wp-content/uploads/2022/02/is-ai-hard-to-learn-scaled.jpg"
            }
        }
    )
return data

}


function samplevideo( number){

    const data = JSON.stringify(
        {
            "messaging_product": "whatsapp",    
            "to": number,
            "type": "video",
            "video": {
                
                "link": "https://samplelib.com/lib/preview/mp4/sample-5s.mp4"
            }
        }
    )
return data
}

function samplebuttons( number){

    const data = JSON.stringify(
        {
            "messaging_product": "whatsapp",
            "recipient_type": "individual",
            "to": number,
            "type": "interactive",
            "interactive": {
                "type": "button",
                "header": {
                    "type": "text",
                    "text":"prueba de titulo en button"
                },
                "body": {
                    "text": "confirmar?"
                },
                "action": {
                    "buttons": [
                        {
                            "type": "reply",
                            "reply": {
                                "id": "001",
                                "title": "si"
                            }
                        },
                        {
                            "type": "reply",
                            "reply": {
                                "id": "002",
                                "title": "no"
                            }
                        }
                    ]
                }
            }}
    )
return data
}
module.exports={

    sampletext,
    sampleimage,
    samplevideo,
    samplebuttons
}