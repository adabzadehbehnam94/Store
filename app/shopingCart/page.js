"use client"
import { useContext } from "react"
import Redusersdata from "../component/Context"
import Image from "next/image"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faMinusSquare, faTrashAlt } from "@fortawesome/free-regular-svg-icons"
import Link from "next/link"
import style from "./shopingcart.module.css"
import { useRouter } from "next/navigation"
// import { useRouter } from "next/router"

 
const checkproduct = (state)=>{
    const result =!state.find(item => item.id)
    return result
}
export default  function ShopingCart(){
    const {state , dispatch} =useContext(Redusersdata)
    const router = useRouter()
    const handleRoute = ()=>{
        router.push("/")
        dispatch({type : "BACK"})
    }
    const data = state.selectedItems
    const total  = state.counteritems
    const price = state.total
    return(
        <div className="container">
            <div className="row mt-4 mb-4">
                <div className="col-12  col-lg-7 pr-2 order-end order-lg-first mt-3 mt-lg-0">
                    {data.map((item)=>(
                        <div className={style.product} key={item.id}>
                            <Image className="mb-2" src = {item.image} alt="imageProduct" width={200} height={200}/>
                            <p>{item.title}</p>
                            <p>{item.description}</p>
                            <p className={style.details}>{item.category}</p>
                            <p className={style.details}>{item.price} $</p>
                            {item.cuantity > 1 && <span className={style.number}>{item.cuantity}</span>}
                            {item.cuantity > 1 && <button className={style.removeIcon} ><FontAwesomeIcon onClick={()=> dispatch({type : "DECREASE" , payload:item})} icon={faMinusSquare} /></button>}
                            <button className={style.removeIcon} ><FontAwesomeIcon onClick={()=> dispatch({type : "REMOVE_ITEM" , payload:item})} icon={faTrashAlt} /></button>
                        </div>
                        
                    ))}

                    {checkproduct(state.selectedItems) && !state.checkout && <p>not found product for purchase</p>}
                    {state.checkout && <p>thank you for your purchase</p>}
                    
                </div>
                <div className="col-12 col-lg-5 pl-2 order-first order-lg-end">
                    {
                        <>
                            <div>
                                <p className={style.details}>total products :  {total}</p>
                            </div>
                            <div>
                                <p className={style.details}>price : {price} $</p>
                            </div>
                            
                            <button className={`btn btn-success mx-2 ${style.success}`} onClick={()=> dispatch({type : "CHECKOUT" })}>Buy $</button>
                            
                            <button className="btn btn-danger mx-2" onClick={()=> dispatch({type : "CANCELL" })}>Cancell</button>

                            {/* <Link href={"/"}>Back to Store</Link> */}

                            <button className="btn btn-primary mx-2" onClick={()=> handleRoute()}>back to Store</button>
                        </>
                        
                    }
                </div>
            
            </div>
        </div>
        
    )
}