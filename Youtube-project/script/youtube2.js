let{videoId,title}=JSON.parse(localStorage.getItem("click_video"))

let largediv=document.getElementById("largediv")
largediv.innerHTML=null
let iframe=document.createElement("iframe")
iframe.src=`https://www.youtube.com/embed/${videoId}`
iframe.setAttribute("allowfullscreen",true)

let title1=document.createElement("h3")
title1.innerText=title
title1.style="color:white"
largediv.append(iframe,title1)

let sidediv=document.getElementById("sidediv")

async function getmoviedata(){
let key="AIzaSyBOD6TluZlvxDPt8gPSGQVgtchkqYRPKMc";
// AIzaSyCuJj4CcvcEjuqcw8u2eOy5G-5cJpYg1V4
try{
    
    
        let res= await fetch(`https://youtube.googleapis.com/youtube/v3/search?key=${key}&part=snippet&type=video&maxResults=20`)
    let data=await res.json()
    let datanew=data.items;
    // console.log(datanew)
    appenddata(datanew)
    
}
catch(err){
    console.log(err)
}
}
getmoviedata()

let appenddata = (datanew)=>{
console.log(datanew)
sidediv.innerHTML=null
datanew.map(function(e){
    const{id:{videoId},snippet:{title,thumbnails:{high}}}=e
     console.log(high)

     let div=document.createElement("div")
    // 
     let title1=document.createElement("h4")
     title1.innerText=title
    //  console.log(title)
    title1.style="color:white"
    let image=document.createElement("img")
    image.src=high.url
    image.style="width:170px;height:130px"

    let localdata={
        title,videoId
    }
    image.onclick=function(e){
        showinanotherpage(localdata)
    }
    
    div.append(image,title1) 
    sidediv.append(div)
})
function showinanotherpage(data) {
    localStorage.setItem("click_video",JSON.stringify(data))
    window.location.href="youtube2.html"
    
}

}