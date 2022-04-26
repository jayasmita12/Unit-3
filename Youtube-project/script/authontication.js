let Register =  async ()=>{

   
    try{

     let register_data={
        name:document.getElementById("name").value,
        email:document.getElementById("email").value,
        password:document.getElementById("password").value,
        username:document.getElementById("username").value,
        mobile:document.getElementById("mobile").value,
        description:document.getElementById("description").value,
    };

    register_data=JSON.stringify(register_data);

     let res = await fetch("https://masai-api-mocker.herokuapp.com/auth/register",{
         method:"POST",
         body:register_data,
         headers:{
            "Content-Type":"application/json", 
         }


     })
     let data = await res.json();
     console.log(data)
    }
    catch(err){
        console.log(err)
    }
}




let Login = async ()=>{
 try{

     let login_data ={
         password: document.getElementById("login-password").value,
         username: document.getElementById("login-username").value,
     }

    let login_data_json=JSON.stringify(login_data)

     let res = await fetch("https://masai-api-mocker.herokuapp.com/auth/login",{
         method:"POST",
         body:login_data_json,
         headers:{
             "Content-Type":"application/json",
         }
     });

     let data = await res.json()
     console.log(data)
     getuser(login_data.username,data.token)

 }
 catch(err){
     console.log(err)
 }
}

let getuser = async (username,token)=>{

 try{
     let res= await fetch(`https://masai-api-mocker.herokuapp.com/user/${username}`,{
         headers:{
             "Content-Type":"application/json",
             "Authorization":`Bearer ${token}`
         },
     });

     let data = await res.json()
     let userdata=[]
     userdata.push(data)
     localStorage.setItem("userdata",JSON.stringify(userdata))
     console.log(data)
 }
 catch(err){
     console.log(err)
 }
}