// 네트워크를 통해서 다른 서버의 api 를 호출하기 위해서.
const request = require('postman-request');
const connection = require('./mysql_connection')

const baseUrl = 'http://dummy.restapiexample.com'

let path = '/api/v1/employees'

request.get( {url:  baseUrl+path, json:true} , 
    function(error, response, body){
        
        let array = body.data
        
        let query = 'insert into employee (name, salary, age) values ? '
        // ? 에 들어갈 데이터는 [  ] 로 만들어야 합니다.
        let data = []
        for(let i = 0; i < array.length; i++){
            data.push( [array[i].employee_name, 
                        array[i].employee_salary,
                        array[i].employee_age] )
        }
        console.log(data)
        connection.query(query, [data] , function(error, results, fields){
                console.log(results)
        })
        connection.end()        
    });







// 인서트 문 하나로, 여러 문장을 한번에 집어 넣는 방법.
// insert into employee (name, salary, age) values
// ("${body.data[0].name}",${body.data[0].salary},${body.data[0].age}),
// ("${body.data[1].name}",${body.data[1].salary},${body.data[1].age}),
// ("${body.data[2].name}",${body.data[2].salary},${body.data[2].age}),
// ("${body.data[3].name}",${body.data[3].salary},${body.data[3].age})

