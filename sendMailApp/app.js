const cron = require('node-cron');
const emailService = require('./emailService');

cron.schedule('0 31 22 * * *', () => {
    emailService.sendEmail('email@gmail.com', 'subject', 'text');
});