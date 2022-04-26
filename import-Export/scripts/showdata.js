async function getdata(){

    try{
        let res = await fetch(url)
        let data= await res.json()
        console.log(data)
    }
    catch(err){
        console.log(err)
    }
    
}


function appeneddata(data,para){
    data.forEach((el)=>{
        let div= document.createElement("div")
        let p=document.createElement("p")
        p.innerText=el.title
        let img=document.createElement("img")
        img.src=el.image 

        div.append(img,p)
        para.append(div)
    })
}

export {getdata,appeneddata}