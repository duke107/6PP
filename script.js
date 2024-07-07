//PRoject 1
// const zodiac=document.getElementById("zodiac");
// const body=document.body;
// const changeBackground=()=>{
//     switch(zodiac.value)
//     {
//         case "aries":
//           body.style.backgroundColor="red";
//             break;
//             case "taurus":
//                 body.style.backgroundColor="pink";
//                   break;
//                   case "capri":
//           body.style.backgroundColor="blue";
//             break;
//             case "leo":
//           body.style.backgroundColor="yellow";
//             break;
//             case "scorpio":
//           body.style.backgroundColor="green";
//             break;
//             case "sagi":
//           body.style.backgroundColor="orange";
//             break;
//             case "pisces":
//           body.style.backgroundColor="aqua";
//             break;
//             case "aquarius":
//           body.style.backgroundColor="grey";
//             break;
//             case "libra":
//           body.style.backgroundColor="";
//             break;
//             case "virgo":
//           body.style.backgroundColor="red";
//             break;
//             case "aries":
//           body.style.backgroundColor="red";
//             break;
//             case "aries":
//           body.style.backgroundColor="red";
//             break;

            
//     }
// };

//PROJECT 2
// const name = document.getElementById("name");
// const tagsContainer = document.querySelector(".tags");
// const addName = () => {
//   if (name.value === "") {
//     return null;
//   }

//   const tag = document.createElement("div");
//   tag.setAttribute("class", "tag");

//   tag.innerText = `Hey, I am ${name.value}`;

//   tagsContainer.append(tag);
// };

//CLASSES CONCEPTS


// class Myclass{
//     #c=30;//this is also a private variable cannot be accessed outside class
//     #d=40;//this is a private variable 
//     constructor(value1,value2)
//     {
//         this.a=value1;
//         this.b=value2;
//     }
//     //getter function
//     get getData(){
//         return this.#c;
//     }
//     //normal function(needs to be called)
//     getData(){
//         return this.#d;
//     }
//     print(){
//         console.log("Printing...",this.#c)
//     }
// }

// const obj1=new Myclass(2,3);
// obj1.print()
// console.log(obj1.getData());
// console.log(obj1.getData);


//INHERITENCE PROPERTY

// class Electronics{
//     #input;
//     #output;
//     #name;

//     constructor(input,output,name)
//     {
//         this.#input=input;
//         this.#output=output;
//         this.#name=name
//     }

//     print(){
//         console.log(this.#name)
//     }
// }

// //now if we want to ahve some property which is unique
// //  to some electronic gadget, we make child class inheriting 
// //  properties from parent Electronics class;
// //child class for Charger 
// class Charger extends Electronics{
//     #plugType;

//     constructor(input,output,name,plugType){
//         super(input,output,name);
//         this.#plugType=plugType;
//     }
// }



// const hpcharger=new Charger(20,30,"Hp","European");
// hpcharger.print()
// //child class for Hard disk
// class HD extends Electronics{
//     #ROM;

//     constructor(input,output,name,plugType){
//         super(input,output,name);
//         this.#ROM=plugType;
//     } 
// }

// const hpHD=new HD(20,30,"Hp Hard disk",1024);
// hpHD.print()

//ASYNCHRONOUS NATURE OF JAVASCRIPT

//basically changing the natural flow of javascript ,ie , one instruction at a time  to multiple instructions at a time

//PROMISES
//The promise object represents the eventual completion of an asynchronous operation and its resulting value
  
//It is one of three states: pending,fulfilled,rejected
//EXAMPLE 1
// const promiseOne =new Promise((resolve,reject)=>{
//     //Do an async task
//     setTimeout(()=>{
//        console.log("Async task is completed");
//        resolve();
//     },4000)
// })

// promiseOne.then(()=>{
//     console.log("Promise Consumed");
// })
//EXAMPLE 2
// const promiseOne =new Promise((resolve,reject)=>{
//     //Do an async task
//     setTimeout(()=>{
//        resolve({username: "Chai",email: "chai@example.com"});
//     },4000)
// })

// promiseOne.then((user)=>{
//     console.log(user);
// })

//EXAMPLE 3
// const promiseOne =new Promise((resolve,reject)=>{
//     //Do an async task
//     setTimeout(()=>{
//        let error=true
//        if(!error)
//        {
//         resolve({username: "Chai",email: "chai@example.com"});
//        }
//        else{
//         reject("Error: 404")
//        }
//     },4000)
// })

// promiseOne
// .then((user)=>{
//     console.log(user);
//     return user.username
// })
// .then((username)=>{
//     console.log(username);
// })
// .catch((error)=>{
//     console.log(error);
// })
// .finally(()=>{
//     console.log("The promise has been consumed (resolved or rejected)");
// })

 // FETCH API
 //the global fetch() method starts the process of fetching a resource from the network returning a promise which is fulfilled once the network is available
 //A fetch() promise only rejects when a netwrok error is encountered . A fetch() promise does not reject on HTTPS errors .

// const url="https://api.coindesk.com/v1/bpi/currentprice.json"
// console.log("a");


// const fetchData= ()=>{
//     fetch(url).then((data)=>{
//         return data.json();
//     }).then((data)=>{
//         console.log(data);
//     }).catch((error)=>{
//         console.log("Error");
//     }).finally((e)=>{
//         console.log("all done");
//     })
//  }
// fetchData()   

// console.log("z");


//ASYNC AWAIT AND TRYCATCH

// const url="https://catfact.ninja/fact";
// const h1= document.querySelector("h1");
// const fetchData=async ()=>{
//     try{
//     const response=await fetch(url);
//     const data=await response.json();
//     h1.innerText=data.fact;
//     }catch(error){
//         console.log(error);
//     }
// }
// fetchData();


