let data=JSON.parse(localStorage.getItem("userdata"))
appendusername(data)
function appendusername(data){
    // data.preventDefault()
    console.log(data)
    let username= document.getElementById("username")
    username.innerHTML=null
    data.map((el)=>{
        let div=document.createElement("div")
        let user=document.createElement("h2")
        user.innerText=`${el.username},Register Successfully`;
        user.style="text-align:center"

        let email=document.createElement("h2")
        email.innerText=`User Email:${el.email}`;
        email.style="text-align:center"

        let mobile=document.createElement("h2")
        mobile.innerText=`Mobile No.:${el.mobile}`;
        mobile.style="text-align:center"

        let name=document.createElement("h2")
        name.innerText=`${el.name}`;
        name.style="text-align:center"

        div.append(user,email,mobile,name)
        username.append(div)
    })
}