const connection = require('./mysql_connection.js')
// node-mysql 실습5
// 1. 2번혼자서
let query = 'select s.title, r.rating \
from series as s \
join reviews as r \
on s.id = r.series_id;'

// connection.query(query,function(error, results, fields){
// console.log(results)});  

// 3.
// query = 'select first_name, last_name, rating \
// from reviewers as rv \
// join reviews as r \
// on rv.id = r.reviewer_id;'

// connection.query(query,function(error, results, fields){
//     console.log(results)});  

// 4.
// query = 'select title as unreviewed_series, rating \
// from series as s \
// left join reviews as r \
// on s.id = r.series_id \
// where r.rating is null;'
// connection.query(query,function(error, results, fields){
//     console.log(results)});

// 5.    언 디파인드
query = 'from series as s \
join reviews as r \
on r.series_id = s.id \
group by genre;'
connection.query(query,function(error, results, fields){
    console.log(results)});

// 6.
query = 'select first_name, last_name, count(rating) as count, \
min(rating) as min ,max(rating) as max, \
avg(rating) as average, \
case \
	when count(rating) > 0 then "ACTIVE" \
    else "INAVTIVE" \
end as status \   
from reviewers as rv \
left join reviews as r on r.reviewer_id = rv.id \
group by rv.id;'    

    