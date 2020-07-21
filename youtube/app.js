// 네트워크를 통해서 다른 서버의 api를 호출하기 위해서.
// node js youtube api 가져오기
// 이걸할줄알아야 그다음꺼를 한다..
const request = require("postman-request");

//
const baseUrl = " ";

let queryUrl = baseUrl;

request.get({ url: queryUrl, json: true }, function (error, response, body) {
  console.log(response.statusCode);
  console.log(body);
});
