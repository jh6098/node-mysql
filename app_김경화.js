// 김경화

const request = require('postman-request')
const connection = require('../mysql-test/mysql_connection')

const baseUrl = 'https://www.googleapis.com/youtube/v3/search'
const path = '?part=snippet&key=AIzaSyBJ_bBElSz4MwzqKKGGK5nq2sBRAe7Wx4w&maxResults=20&type=video&q=고양이'
let encodedPath= encodeURI(path)

request.get({url : baseUrl+encodedPath, json : true}, function (error, response, body) {

    if(error != null){console.log('error: '+error)}
    if(error == null){console.log('status code: '+response.statusCode)}

    let arr = body.items
    console.log('length: '+arr.length)

    let insert_query = 'insert into youtube (channelTitle, title, publishedAt, videoId) values ?'

    let values = []

    for(let i = 0; i < arr.length; i++){

        values.push([arr[i].snippet.channelTitle, arr[i].snippet.title, arr[i].snippet.publishedAt, arr[i].id.videoId])

    }

    // console.log(values)

    connection.query(insert_query, [values], function(error, results, fields){
    
        if(error != null){console.log('error: '+error)}
        if(error == null){console.log(results)}

        connection.end()

    })

})