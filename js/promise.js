var http = require('http');
var opts = {
  method:'GET',
  host:'azu.github.io',
  port:'80',
  path:'promises-book/json/comment.json'
}
http://azu.github.io/promises-book/json/comment.json
http.request(opts,function(res) {
  console.log(res)
})
