'use client'

import Link from "next/link"
import style from "./Header.module.css"
import "bootstrap-icons/icons/justify.svg"
import { useContext , useActionState, useEffect } from "react"
import Redusersdata from "./Context"
import { login, logout } from "./authentication"
import { toast } from "react-toastify"
import { useRouter } from "next/navigation"




export default function Header(){
    const {state , user , logoutUser}=useContext(Redusersdata)
    const router= useRouter()
    
    return(
        <div className= {style.bgheader}>
            <div className="container">
                <div className="row  d-md-flex d-none">
                    <div className="col-lg-8 col-sm-7 ">
                        <Link href={"/"} className={`col-lg-9 col-sm-8 ${style.logoHeader}`}>Store</Link>
                    </div>
                    
                        <div className="col-lg-4  col-sm-5 row  align-items-center justify-content-end text-end">
                            {user ? 
                                <>
                                    <div className="col-3">
                                        <p >{user.name}</p>
                                    </div>
                                    <div className="col-3">
                                        <button  onClick={async()=>{
                                            await logout()
                                            logoutUser()
                                            router.push("/register")
                                        }}>logout</button>
                                    </div>
                                </>
                                
                                :
                                <>
                                    <div className="col-3">
                                        <Link  href={"/register"}>register</Link>
                                    </div>
                                    <div className="col-3">
                                        <Link  href={"/login"}>login</Link>
                                    </div>
                                </>
                               
                            }
                            
                           
                        <div className="col-3 position-relative">
                            <Link href={"/shopingCart"}>
                                <svg className={style.cartLogo} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M0 24C0 10.7 10.7 0 24 0L69.5 0c22 0 41.5 12.8 50.6 32l411 0c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3l-288.5 0 5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5L488 336c13.3 0 24 10.7 24 24s-10.7 24-24 24l-288.3 0c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5L24 48C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z"/></svg>
                            </Link>
                            <span className={`position-absolute ${style.counternumber}`}>{state.counteritems}</span>
                        </div>
                        
                    </div>
                    
                    

                </div>
                <div className={` d-md-none row align-items-center ${style.MobileMenu}`}>
                    <Link className="col-9" style={{fontSize : "50px"}} href={"/"}>Store</Link>

                    <div className="position-relative col-1">
                            <Link href={"/shopingCart"}>
                                <svg className={style.cartLogo} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M0 24C0 10.7 10.7 0 24 0L69.5 0c22 0 41.5 12.8 50.6 32l411 0c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3l-288.5 0 5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5L488 336c13.3 0 24 10.7 24 24s-10.7 24-24 24l-288.3 0c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5L24 48C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z"/></svg>
                            </Link>
                            <span className={`position-absolute ${style.counternumber}`}>{state.counteritems}</span>
                    </div>
                    
                    <button className={`col-2 ${style.menuButton}`} type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample" aria-controls="offcanvasExample">
                        
                        <svg className={style.bars} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                            <path d="M0 96C0 78.3 14.3 64 32 64l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 128C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 288c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32L32 448c-17.7 0-32-14.3-32-32s14.3-32 32-32l384 0c17.7 0 32 14.3 32 32z"/>
                        </svg>
                    </button>

                    
                </div>
            </div>
                   
                    <div className="d-md-none offcanvas offcanvas-end" tabIndex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
                    <div className="offcanvas-header">
                        <h5 className="offcanvas-title" id="offcanvasExampleLabel">Store</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                    </div>
                    <div className={`offcanvas-body ${style.menuBody}`}>
                        <Link href={"/login"}>login</Link>
                        <Link href={"/register"}>register</Link>
                    </div>
                    </div>
        </div>
    )
}