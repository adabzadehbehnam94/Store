"use client"
import { useContext, useEffect, useState } from "react"
import Redusersdata from "../component/Context"
import Image from "next/image"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faMinusSquare, faTrashAlt } from "@fortawesome/free-regular-svg-icons"
import Link from "next/link"
import style from "./shopingcart.module.css"
import { usePathname, useRouter } from "next/navigation"
import { fetchdata } from "../functions/dataApi"
import close from "@/public/icons/icons8-close-24.png"
// import { useRouter } from "next/router"


const checkproduct = (state) => {
    const result = !state.find(item => item.id)
    return result
}
export default function ShopingCart() {
    const { state, dispatch } = useContext(Redusersdata)
    const router = useRouter()
    const handleRoute = () => {
        router.push("/")
        dispatch({ type: "BACK" })
    }
    const data = state.selectedItems
    const total = state.counteritems
    const price = state.total
    const path = usePathname()
    const [count, setcount] = useState(1)
    const [related, setrelated] = useState(null)
    useEffect(() => {
        const fetch = async () => {
            const data = await fetchdata()
            setrelated(data)
        }

        fetch()
    }, [])
    // const relatedProducts = ()=>{
    //     related.filter(item =>{
    //         let allPro = item.category
    //         data.map(item =>{
    //             let selectedPro = item.category
    //             return selectedPro
    //         })
    //         return allPro === selectedPro
    //     })
    // }



    return (
        <div className="container">
            <h5 className={style.path}>Home {path}</h5>
            <h1 className={style.textShoping}>Shopping Cart</h1>
            <div className="row mt-4 mb-4">

                <div className="col-12  col-lg-8 pr-2 order-end order-lg-first mt-3 mt-lg-0">

                    {data.map((item) => (
                        <div className="row align-items-center justify-content-end" key={item.id}>
                            <div className={`row justify-content-end ${style.titleProduct}`}>
                                <div className="col-3 text-start px-5" >Product</div>
                                <div className="col-5 p-0">Price</div>
                                <div className="col-2 p-0">Quantity</div>
                                <div className="col-2 p-0">Total</div>
                            </div>
                            <div className="col-1 ">
                                <button className={style.removeIcon} ><Image onClick={()=> dispatch({type : "REMOVE_ITEM" , payload : item})} alt="close" src={close} width={24} height={24}/></button>
                            </div>

                            <div className={`col-11 d-flex align-items-center justify-content-between px-0 ${style.product}`} key={item.id}>

                                <div className="col-7 d-flex align-items-center">
                                    <Image className={`mb-2 ${style.imageProduct}`} src={item.images[0]} alt="imageProduct" width={200} height={200} />
                                    <h3 className="d-inline ms-4">{item.title}</h3>

                                </div>


                                <div className="col-5 d-flex justify-content-between">
                                    <h4 className={style.details}>{item.price} $</h4>
                                    {/* fix this problem */}
                                    <select defaultValue={item.cuantity} >
                                        <option value={item.cuantity} key={item.cuantity}>{item.cuantity}</option>
                                        {/* {count?.map(item =(
                                    <option value={item} key={item}>{item}</option>
                                ))} */}
                                    </select>


                                    <p className="d-inline text-align-end">{item.cuantity * item.price}</p>
                                </div>





                            </div>
                        </div>

                    ))}

                    {checkproduct(state.selectedItems) && !state.checkout && <p>not found product for purchase</p>}
                    {state.checkout && <p>thank you for your purchase</p>}

                </div>
                <div className="col-12 col-lg-4 pl-2 order-first order-lg-end">
                    {
                        <>
                            <div>
                                <p className={style.details}>total products :  {total}</p>
                            </div>
                            <div>
                                <p className={style.details}>price : {price} $</p>
                            </div>

                            <button className={`btn btn-success mx-2 ${style.success}`} onClick={() => dispatch({ type: "CHECKOUT" })}>Buy $</button>

                            <button className="btn btn-danger mx-2" onClick={() => dispatch({ type: "CANCELL" })}>Cancell</button>

                            <button className="btn btn-primary mx-2" onClick={() => handleRoute()}>back to Store</button>
                        </>

                    }
                </div>
                {/* <div className="col-12">
                    <div className="row">
                        <h1 className="mb-4">Related Products</h1>
                        {
                            relatedProducts?.slice(0, 3).map(item => (
                                <Link href={`/${item.id}`} className={`col-3  ${style.relatedProducts}`} key={item.id}>
                                    <Image alt={item.title} src={item.images[0]} width={250} height={236} />
                                    <h3 className="mb-2">{item.title}</h3>
                                    <p>{item.price} $</p>
                                </Link>
                            ))
                        }
                    </div>
                </div> */}

            </div>
        </div>

    )
}