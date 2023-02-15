const https= require ("https");
require('dotenv').config();



async function sendMessageWhatsapp(data) {
    return new Promise((resolve, reject) => {
      const options = {
        host: "graph.facebook.com",
        path: "/v15.0/103232192593050/messages",
        method: "POST",
        body: data,
        headers: {
          "Content-Type": "application/json",
          Authorization: process.env.TOKEN_KEY,
           
        },
      };
  
      const req =  https.request(options, res  =>{

        res.on ("data", d => {
             process.stdout.write(d);
         })
         resolve(res)
     });
     
  
      req.on("error", (error) => {
        console.error(error);
        reject(error);
      });
  
      req.write(data);
      req.end();
    });
  }
  







/** 
function sendMessageWhatsapp(data){

const options ={
    host : "graph.facebook.com",
    path: "/v15.0/103232192593050/messages",
    method : "POST",
    body : data,
    headers : {
        'Content-Type': 'application/json',
        Authorization: "Bearer EAAJYO0zVZB9IBAMwOhKQ56kvZAz2Rw30zvENtpG4j1F6TuWQ3atPWU8BXaZA1ZC6Y5mo1XUolZCjvl5Jo3NoYJfrNlLWTOPBoikJ5YMcknFv69DtfZAZCIAm1vBXsy2HbpKnRxM9dPGdfwXoQzcHRw5Aca4hsxWON22yBgkvIYOZAI9CQVR59tQX"
    }
}

 const req =  https.request(options, res  =>{

   res.on ("data", d => {
        process.stdout.write(d);
    })
});

 req.on ("error", error=> {console.error(error);
});
req.write(data);
req.end();

}
*/

module.exports={sendMessageWhatsapp}