const mongoose = require('mongoose')
// para retirar a advertencia da Promise do mongoose
mongoose.Promise = global.Promise 

module.exports = mongoose.connect('mongodb://localhost/todo')

