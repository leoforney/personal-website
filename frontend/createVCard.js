let vCard = require('vcards-js');

//create a new vCard
vCard = vCard();

//set properties
vCard.firstName = 'Leo';
vCard.middleName = 'O';
vCard.lastName = 'Forney';
vCard.photo.embedFromFile('./public/img/headshot1.jpg')
vCard.logo.embedFromFile('./public/img/headshot1.jpg')
vCard.cellPhone = '847-946-9328';
vCard.title = 'Software Developer';
vCard.email = "forneyleo@gmail.com";
vCard.url = 'https://leoforney.me';


//save to file
vCard.saveToFile('./public/leo-forney.vcf');

console.log("Created VCard")
