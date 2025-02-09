"use client"

import { useActionState, useContext, useEffect } from "react"
import { login } from "../component/authentication"
import { toast } from "react-toastify"
import { useRouter } from "next/navigation"
import Redusersdata from "../component/Context"

export default function Login (){
   const [state, formAction]= useActionState(login , {})
   const router = useRouter()
   const {handleUser} = useContext(Redusersdata)
    useEffect(()=>{
        if(state?.success){
            toast.success(state.success)
            router.push("/")
            handleUser(state.user)
        }else{
            toast.error(state.error)
        }
    },[state])

    return(
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-6">
                    <form action={formAction}>
                        
                        <label>email</label>
                        <input type="text" name="email" />
                        <br/>
                        <label>password</label>
                        <input type="password" name="password" />
                        <br/>
                        <button type="submit">login</button>
                        
                    </form>
                </div>
            </div>
        </div>
    )
}