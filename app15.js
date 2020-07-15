const request = require('postman-request');
const connection = require('./mysql_connection')

const baseUrl = 'https://www.googleapis.com/youtube/v3/search?part=snippet&key=AIzaSyD_ObOCL1fGX7sbyWhhvTXVfr1xwJKARHo&video&type=video&maxResults=7&regionCode=KR&q='
const key = '무한도전'
const encodedUrl = encodeURI(key)
const finalurl = baseUrl+encodedUrl

request.get({url : finalurl, json:true},
    function(error,response,body){
        let array = body.items

        let query = 'insert into youtube (videoId, title, publishTime) values ?'
        //?에 들어갈 데이터는 []로 만들어야 함
        let data = [] // jsonArray로 만들음
        for(let i=0;i< array.length;i++){
            data.push( [array[i].id.videoId,
                array[i].snippet.title,
                array[i].snippet.publishTime] )
        }
        console.log(data)
        //                아래 [data]의 뜻은, 첫번째 물음표? 가 data라는 뜻이다.
        connection.query(query,[data], function(error, results, fields){
            console.log(results)
        })
        connection.end()
    })

// 시험
// request.get({url : url,json:true},function(error,results,body){
//     console.log(body.items[0].id.videoId)
// })
