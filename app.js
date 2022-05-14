// const amount = 12 

// if(amount <10 ){
//     console.log('small number')
// }else{
//     console.log('large number')
// }
// console.log('first app')

// console.log(__dirname) //Path to current directory

// setInterval(()=>{
//     console.log('Hello world')
// },2000)


//------ OS MODULOS ------------------------<
const os = require('os')

//info about current user
const user = os.userInfo()
console.log(user) 

//method return the sistem uptime in seconds
console.log(`The system Uptime is ${os.uptime() }seconds`)

const currentOS ={
    name:os.type(),
    release: os.arch(),
    totalMem: os.totalmem(),
    freeMem: os.freemem(),
}
console.log(currentOS)