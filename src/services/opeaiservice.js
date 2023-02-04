const request = require('request');


function completeText(prompt) {
    


    return new Promise((resolve, reject) => {
        const options = {
            method: 'POST',
            url: 'https://api.openai.com/v1/engines/davinci/completions',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer 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'
            },
            json: {
                "prompt": prompt,
                "temperature": 0.5,
                "max_tokens": 100
            }
        };

        request(options, (error, response, body) => {
            if (error) reject(error);
            resolve(body.choices[0].text);
        });
    });
}
module.exports={completeText}
