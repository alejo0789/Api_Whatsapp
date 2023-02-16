const axios = require('axios');


function sendMessageflask(texto){
    const data = {
        text: texto,
       
    };
axios.post('https://f-server2.onrender.com/register', data)
    .then(response => {
        console.log(response.data);
    })
    .catch(error => {
        console.log(error.response.data);
    }); }


module.exports={sendMessageflask}