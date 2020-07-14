const connection = require('./mysql_connection.js')

let query = 'select * from books'

connection.query(query, function(error, resuluts, fields){
    console.log(resuluts)
})
connection.end()



