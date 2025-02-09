import Image from "next/image"
import style from "./id.module.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faFontAwesome, faStar } from "@fortawesome/free-regular-svg-icons"
const fetchdata = async (id)=>{
    const result = await fetch(`https://fakestoreapi.com/products/${id}`)
    return await result.json()
    
  }

export default async function Product({params}){
    const para = await params
    // console.log(para.id);
    
    const fetch = await fetchdata(para.id)
    return(
        <div className="container my-3">
            <Image className="mb-3" src={fetch.image} width={300} height={300} alt="product"/>
            <h3 className="my-2">{fetch.title}</h3>
            <p>{fetch.description}</p>
            <p className={style.rate}>{fetch.rating.rate} <FontAwesomeIcon icon={faStar}/></p>
            <br/>
            <p className={style.rate}>{fetch.price} $</p>

        </div>
        
    )
}