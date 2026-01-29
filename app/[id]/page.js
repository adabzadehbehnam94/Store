"use client"
import Image from "next/image"
import style from "./id.module.css"
import { faFontAwesome, faStar } from "@fortawesome/free-regular-svg-icons"
import { isinCart, quantity, showQuantity } from "../functions/isproduct"
import { useContext, useEffect, useState } from "react"
import Redusersdata from "../component/Context"
import { useParams, usePathname } from "next/navigation"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt, faSquareMinus, faSquarePlus } from '@fortawesome/free-regular-svg-icons';
import { fetchdata } from "../functions/dataApi"
import Link from "next/link"



export default function Product() {



    const [product, setPrpduct] = useState(null)
    const [products, setPrpducts] = useState(null)
    const [count, setcount] = useState(null)

    const params = useParams()
    const id = params.id

    useEffect(() => {



        const fetchDataItem = async () => {
            const data = await fetch(`https://dummyjson.com/products/${id}`)
            const result = await data.json()
            setPrpduct(result)
            const allProducts = await fetchdata()
            setPrpducts(allProducts)
        }
        fetchDataItem()

        const countInput = () => {
            let countArr = []
            for (let i = 1; i <= product?.stock; i++) {
                countArr.push(i)
            }

            setcount([...countArr])

        }

        countInput()

    }, [])


    const relatedProducts = products?.filter(item => {
        return item.category === product?.category && item.id != product?.id
    })



    const { state, dispatch } = useContext(Redusersdata)

    return (
        <>
            {product &&
                <div className="container my-3">

                    <h5 className="mb-3 mt-3 mb-md-5 mt-md-5">{`Home / Products / ${product?.title}`}</h5>

                    <div className="row">
                        <div className="col-sm-6 col-12">
                            <Image className={style.imageProduct} src={product?.images[0]} width={400} height={400} alt="product" />
                        </div>
                        <div className="col-sm-6 col-12">
                            <h1 className={style.productTitle}>{product?.title}</h1>
                            <p className={style.rate}>{product?.price} $</p>
                            <p className={style.description}>{product?.description}</p>
                            {/* <p className={style.rate}>{product?.rating.rate} <FontAwesomeIcon icon={faStar} /></p> */}
                            <br />
                            <h4 className="mb-4">Quantity</h4>

                            {/* fix this error */}
                            <select className={style.count}  onChange={(item) => setcount(Number(item.target.value))}>
                                {/* {
                                    count && 
                                    count.map(item => (
                                            <option value={item} key={item}>{item}</option>
                                        ))
                                } */}

                                <option value="1" key="1" >1</option>
                            </select>

                            <button className={style.addCart} onClick={() => dispatch({ type: "ADD_ITEM", payload: { ...product, cuantity: 2 } })}>Add to Cart</button>


                        </div>
                        <div className="col-12">
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
                        </div>
                    </div>


                </div>

            }
        </>
    )
}