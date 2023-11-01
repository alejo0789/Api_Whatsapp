const axios = require('axios');


function sendMessageflask(texto, number){
    var now = new Date();
    const data = {
        text: texto,
        numero: number,
        fecha:now
       
    };
axios.post('https://api-wallet-5y09.onrender.com/api/users/register_values', data)
//axios.post('http://127.0.0.1:5000/register', data)
    .then(response => {
        console.log(response.data);
    })
    .catch(error => {
        console.log(error.response.data);
    }); }


module.exports={sendMessageflask}