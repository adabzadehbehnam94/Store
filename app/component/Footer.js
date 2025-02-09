"use client"
import Link from "next/link";
import style from "./Footer.module.css"
export default function Footer (){
    return(
        <div className={style.backfooter}>
            <div className="container">
                <div className={`row justify-content-between align-items-center ${style.mainfooter}`}>
                    <p className="col-lg-9 col-md-8 col-7">copy right 2025</p>
                    <div className="row col-lg-3 col-md-4 col-5">
                        <Link className="col-6" href={"/aboutus"}>about us</Link>
                        <Link className="col-6" href={"/contact"}>contact</Link>
                    </div>
                    
                </div>
                
            </div>
        </div>
    )
}