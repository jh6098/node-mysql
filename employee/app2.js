const request = require('postman-request' )

const baseUrl = 'http://dummy.restapiexample.com/api/v1/employees'

let queryUrl = baseUrl   //key 값은 안넣어줘도 된다고함.
            
//let query = 'data'

//get 방식으로 호출하라.
request.get({url : queryUrl, json:true}, function(error, response, body){
    console.log(response.statusCode)
    console.log(body)


})