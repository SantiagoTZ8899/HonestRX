let API_KEY = 'c27bf672-2714a3f3'
let DOMAIN = 'https://santiagotz8899.github.io/ReciPad/'
let mailgun = require('mailgun-js')({apiKey: API_KEY, domain: DOMAIN});

const data = { 
    from: 'Excited User <me@samples.mailgun.org>',
    to: 'naterendon@gmail.com ',
    subject: 'hello',
    text: 'Testing some Mailgun Fun!'
};

mailgun.messages().send(data, (body) => {
    console.log(body);
});