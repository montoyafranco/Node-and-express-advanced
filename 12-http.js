const http = require('http');

const server = http.createServer((req,res)=>{

    // con esto levanto un server con createServer - req es lo que voy a recibir y res lo que voy a mandar

if(req.url === '/'){
    res.end('Welcome page')

}
if(req.url === '/about'){
    res.end('About us ')
}



// res.write('welcome to our home page')
// res.end()


})

server.listen(5000)