
async function getmoviedata(){
    let key="KEY";
    // AIzaSyCuJj4CcvcEjuqcw8u2eOy5G-5cJpYg1V4
    try{
        let searchmovie=document.getElementById("searchmovie").value
        if(searchmovie){
            let res= await fetch(`https://youtube.googleapis.com/youtube/v3/search?key=${key}&part=snippet&q=${searchmovie}&type=video&maxResults=20`)
        let data=await res.json()
        let datanew=data.items;
        // console.log(datanew)
        appenddata(datanew)
        }
       else{

       }
    }
    catch(err){
        console.log(err)
    }
}

let displayvideo = document.getElementById("display-video")
 let appenddata = (datanew)=>{
    // console.log(datanew)
    displayvideo.innerHTML=null
    datanew.map(function(e){
        const{id:{videoId},snippet:{title,thumbnails:{high}}}=e
        //  console.log(high)

         let div=document.createElement("div")
        // 
         let title1=document.createElement("h4")
         title1.innerText=title
        //  console.log(title)
        title1.style="color:white"
        let image=document.createElement("img")
        image.src=high.url
        image.style="width:280px;height:210px"

        let localdata={
            title,videoId
        }
        image.onclick=function(e){
            showinanotherpage(localdata)
        }
        
        div.append(image,title1) 
        displayvideo.append(div)
    })

    function showinanotherpage(data) {
        localStorage.setItem("click_video",JSON.stringify(data))
        window.location.href="youtube2.html"
    }
}



getmostpopulrmovie()
async function getmostpopulrmovie(){
    let key="AIzaSyBOD6TluZlvxDPt8gPSGQVgtchkqYRPKMc"
    // AIzaSyCuJj4CcvcEjuqcw8u2eOy5G-5cJpYg1V4
    try{
        
        
            let res= await fetch(`https://youtube.googleapis.com/youtube/v3/search?key=${key}&part=snippet&type=video&maxResults=20&chart=mostPopular`)
        let data=await res.json()
        let datanew=data.items;
        // console.log(datanew)
        appenddata(datanew)
        
    }
    catch(err){
        console.log(err)
    }
}

let authonticationdata=JSON.parse(localStorage.getItem("userdata"))

appendusername(authonticationdata)
function appendusername(authonticationdata){
    let username= document.getElementById("username")
    username.innerHTML=null
    authonticationdata.map((el)=>{
        console.log(el.username)
        username.append(el.username)
    })
}
