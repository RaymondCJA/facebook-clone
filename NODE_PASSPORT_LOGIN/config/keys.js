const password = require('./MyData.js').password22;

module.exports = {
    mongoURI: 'mongodb+srv://pal:' + password + '@cluster0-r7sh7.mongodb.net/test?retryWrites=true&w=majority'
}