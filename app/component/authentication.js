"use server"

import { cookies } from "next/headers"

const handleError = (data)=>{
    const result = []
    Object.keys(data).map(item =>{
        data[item].map(item => result.push(item))
    })

    return result.join()
}

const register = async (state , formdata)=>{
    const name = formdata.get("name")
    const email = formdata.get("email")
    const password = formdata.get("password")
    const confirm = formdata.get("confirm")

    const data = await fetch("http://localhost:8000/api/register",{
        method:"POST",
        cache:"no-store",
        headers:{"content-type" : "application/json"},
        body:JSON.stringify({
            name:name,
            email:email,
            password:password,
            c_password : confirm
        })
    })

    const result = await data.json()
    
    if(data.ok){
        return{
            success : "you are registerd to store"
        }
    }else{
        return{
            error : handleError(result)
        }
    }
    
}

const login = async (state , formdata)=>{
    const email = formdata.get("email")
    const password = formdata.get("password")

    const data = await fetch("http://localhost:8000/api/login",{
        method:"POST",
        cache:"no-store",
        headers:{"content-type" : "application/json"},
        body:JSON.stringify({
            email:email,
            password:password,
        })
    })

    const result = await data.json()
    
    if(data.ok){
        const coock =await cookies()
        coock.set({
            name : "token",
            value : result.token,
            httpOnly:true
        })
        return{
            success : "you are loged in",
            user : result.user
        }
    }else{
        return{
            error : handleError(result)
        }
    }
    
}


const me = async()=>{
    const cook = await cookies()
    const getToken = cook.get("token")
    if(!getToken){
        return {
            error : "user forbiden"
        }
    }
    const data = await fetch("http://localhost:8000/api/me",{
        method : "GET",
        cache : "no-store",
        headers:{
            "Authorization" : `Bearer ${getToken.value}`
        },
        
        
    })
    const result = await data.json()
    if(data.ok){
        return {
            user : result.user
        }
    }else{
        return{
            error : "user not found"
        }
    }
    
}

const logout = async()=>{
    const cook = await cookies()
    const deleteCook = cook.get("token")
    // console.log(deleteCook.value);
    
   const data = await fetch("http://localhost:8000/api/logout",{
    cache : "no-store",
    method : "POST",
    headers:{
        "Authorization" : `Bearer ${deleteCook.value}`,
        "Accept" : "application/json"
    }
   })

   const result = await data.json()
   
   if(data.ok){
    cook.delete("token")
    return{
        success : "you are logedout"
    }
    
    
   }else{
    return{
        error : "error equired"
    }
   }
}

export{register , login , me , logout}