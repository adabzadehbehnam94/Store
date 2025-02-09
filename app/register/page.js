"use client"

import { useActionState, useEffect } from "react"
import { register } from "../component/authentication"
import { toast } from "react-toastify"

export default function Register (){
   const [state, formAction]= useActionState(register , {})
    useEffect(()=>{
        if(state?.success){
            toast.success(state.success)
        }else{
            toast.error(state.error)
        }
    },[state])

    return(
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-6">
                    <form action={formAction}>
                        <label>name</label>
                        <input type="text" name="name" />
                        <br/>
                        <label>email</label>
                        <input type="text" name="email" />
                        <br/>
                        <label>password</label>
                        <input type="password" name="password" />
                        <br/>
                        <label>confirm password</label>
                        <input type="password" name="confirm" />
                        <br/>

                        <button type="submit">register</button>
                        {/* <p>{state?.success}</p>
                        <p>{state?.error}</p> */}
                        
                    </form>
                </div>
            </div>
        </div>
    )
}