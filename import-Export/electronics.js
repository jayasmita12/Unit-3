import navbar from "./componenet/navbar.js"
import {getdata,appeneddata} from "./scripts/showdata.js"

let navbar_div = document.getElementById("navbar-container");

navbar_div.innerHTML=navbar();

let  url="https://fakestoreapi.com/products/category/jewelery"
let res= await  fetch(url)
console.log(res)


let parent = document.getElementById("data")
appeneddata(res,parent)