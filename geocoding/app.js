// 네트워크를 통해서 다른 서버의 api를 호출하기 위해서.
const request = require('postman-request' )
const connection = require('./mysql_connection2.js') 

// 1. 화곡역의 위도, 경도를 뽑아서 출력
const Url = "https://api.mapbox.com/geocoding/v5/mapbox.places/화곡역.json?access_token=pk.eyJ1IjoicGFya2plaHl1biIsImEiOiJja2NteHgyc2YwNXQ4MnptcXUzbWd3aXN5In0.7Uw0ZtZDgz8seCBqqhigkw"
let encodeUrl = encodeUrI(url)

request.get({url:encodeurl, json:true},
    function (error, response, body) {
        console.log(body.features[0].center[1])
        console.log(body.features[0].center[0])
    }) //오류걸림;;


let queryUrl = baseUrl


// npm 포스트맨-리퀘스트 설치
const request = require('postman-request');
request('http://www.google.com', function (error, response, body) {
  console.log('error:', error); // Print the error if one occurred
  console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  console.log('body:', body); // Print the HTML for the Google homepage.
});






