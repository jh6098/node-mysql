// 네트워크를 통해서 다른 서버의 api를 호출하기 위해서.
const request = require('postman-request' )
const connection = require('./mysql_connection2.js') 
//.js 안써도됨.
const baseUrl = 'http://dummy.restapiexample.com/api/v1/employees'

let queryUrl = baseUrl   //key 값은 안넣어줘도 된다고함.
            
// get 방식으로 호출하라.(함소호출)
// body 
request.get({url : queryUrl, json:true}, function(error, response, body){
    // console.log(response.statusCode) 잠시 주석처리
    // console.log(body)

    // let query = `insert into employee (name, salary, age) \
    // values ("'+body.data[0].employee_name +'", '+ 
    // body.data[0].employee_salary+', '+body.data[0].employee_age+');`
    
    // 데이터 넣는 2번째 방법
    let array = body.data

    let query = 'insert into employee (name, salary, age) values ? '
    // ? 에 들어갈 데이터는 [ ]로 만들어야 한다. 
    
    // 이쪽부분이 중요하다 혼자할줄알아야됨.
    let data = []
    for(let i = 0; i < array.length; i++){
        data.push( [array[i].employee_name,
                    array[i].employee_salary,
                    array[i].employee_age])
    }
    console.log(data)
    // 아래 [ data ] 의 뜻은,첫번재 물음표? 가 data 라는 뜻이다.
    connection.query(query, [data] ,function(error, results, fields){
    console.log(results)})
    
connection.end()
});
// 오리지널 인서트문 하나로, 여러문장을 한번에 집어넣는 방법.
// insert into employee (name, salary, age) values
// ( "${body.data[0].employee_name}",${body.data[0].employee_salary ${body.data[0].employee_age}),
// ( "${body.data[1].employee_name}",${body.data[1].employee_salary ${body.data[1].employee_age}),
// ( "${body.data[2].employee_name}",${body.data[2].employee_salary ${body.data[2].employee_age}),
// ( "${body.data[3].employee_name}",${body.data[3].employee_salary ${body.data[3].employee_age}),
// ...
// ...     
// 반복이되는거임.   

// let query = `insert into employee (name, salary, age) 
//     values ( "${body.data[1].employee_name}", 
//     ${body.data[1].employee_salary}, 
//     ${body.data[1].employee_age} );`

//     console.log(query)

//     connection.query(query,function(error, results, fields){
//     console.log(results)}) 
// 원래 위에 쓴거임 위에꺼 변형줄꺼임. for 루프로!!


// 데이터 넣는 첫번째방법.
//     let array = body.data

//     let query = 'insert into employee (name, salary, age) values'

//     for(let i = 0; i < array.length; i++){
//         query = query + `("${array[i].employee_name}" ,
//                     ${array[i].employee_salary},
//                     ${array[i].employee_age}),`
//     }
//     query = query.slice(0, -1)
//     console.log(query)  //slice 검색 위에 맨밑,` 랑 관련

//     connection.query(query,function(error, results, fields){
//     console.log(results)})
    
// connection.end()