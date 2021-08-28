const { timeStamp } = require("console");
const fs = require("fs");
const employee = {
  name: "rounak",
  age: "24",
};
// console.log(employee.name);

// const js=JSON.stringify(employee)
// console.log(js.name);
// const sj=JSON.parse(js)
// console.log(sj.name);

// fs.writeFileSync('Employee.json',js)

// const dataBuffer=fs.readFileSync('Employee.json')
// const dataJson=dataBuffer.toString()
// let data=JSON.parse(dataJson)
// data.name="khushal"
// data.age=19
// data.planet="Mars"
// data=JSON.stringify(data)
// fs.writeFileSync('Employee.json',data)
// console.log(data);

// const tasks = {
//   tasks: [
//     {
//       text: "hello",
//       completed: true,
//     },
//     {
//       text: "world",
//       completed: false,
//     },
//     {
//       text: "pause",
//       completed: false,
//     },
//   ],
//   getTasksToDo() {
//     const taskstodo = this.tasks.filter((task) => task.completed === false);
//     return taskstodo;
//   },
// };
// let a = tasks.getTasksToDo();
// console.log(a);

// const geocode=(address,callback)=>{
//     setTimeout(()=>{
//       const data={
//         longitude:0,
//         latitude:1
//       }
//       callback(data)

//     },2000)
// }

// geocode('aa',(data)=>{
//   console.log('dat is',data);

// })

// const add = (a, b, callback) => {
//   setTimeout(() => {
//     callback(a + b);
//   }, 2000);
// };

// add(1, 2, (sum) => {
//   console.log("sum is " + sum);
// });

// const name='rounak patni'
// const age=25
// const data={
//   name,
//   age
// }
// console.log(data);

// const product={
//   p_nm:"apple",
//   p_price:45000,
//   p_color:"red",
//   p_available:false
// }

// const {p_nm,p_price}=product
// console.log(p_nm);
// console.log(p_price);

// const tr=({p_nm:name})=>{
// console.log(name);
// }

// tr(product)

const http = require("http");
const url = `http://api.weatherstack.com/current?access_key=1d8c8e27b38ffe0009440dd4a1e72e06&query=22.719568,75.857727`;
const request = http.request(url, (response) => {
  let data = "";
  response.on("data", (chunk) => {
    // data = data + chunk.toString();
    console.log(chunk);
    
  });
  response.on("end", () => {
    console.log(data);
  });
});
request.end();
