let http = require('http')
server = http.createServer(function(request, response) {
    response.write('Hello World 13,Good morning / New img check !')
    response.end()
})

server.listen(8080)
console.log ("Server Running")
