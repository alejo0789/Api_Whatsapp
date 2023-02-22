const axios = require('axios');


function sendMessageflask(texto, number){
    const data = {
        text: texto,
        numero: number
       
    };
axios.post('https://f-server2.onrender.com/register', data)
    .then(response => {
        console.log(response.data);
    })
    .catch(error => {
        console.log(error.response.data);
    }); }


module.exports={sendMessageflask}