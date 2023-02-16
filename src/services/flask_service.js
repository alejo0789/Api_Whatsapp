const axios = require('axios');

const data = {
    text: 'prueba',
   
};

axios.post('https://f-server2.onrender.com/register', data)
    .then(response => {
        console.log(response.data);
    })
    .catch(error => {
        console.log(error.response.data);
    });