async function  getimages(url){
    try{
        let res = await fetch(url)
        let data = await res.json()
        return data
    }
    catch(err){
        console.log(err)
    }
}

function appendimage(data,parent){
    data.forEach((element) => {
        let div= document.createElement("div")
        let img= document.createElement("img")
        img.src=element.urls.small
        let title= document.createElement("h1")
        title.style="color:white"
        title.innerText=element.user.name

        div.append(img,title)
        parent.append(div)


    });
}
export {getimages,appendimage}