const request = require('postman-request');

const baseUrl = 'http://api.weatherstack.com/'

let queryUrl = baseUrl+
            'current?access_key=32ed7ab9ae98fcccce133f5b08d9a8a2' +
            '&query='

let query = 'seoul'

// get 방식으로 호출하라.
request.get({url : queryUrl + query, json:true}, function(error, response, body){
    console.log(response.statusCode)
    console.log(body)
    console.log(body.current.temperature) // 온도만 출력
})
// 