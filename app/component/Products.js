"use client"

import Link from 'next/link';
import Image from 'next/image';
import styles from "@/styles/page.module.css"
import { shortTitle } from '../functions/isproduct';
import Redusersdata from "../component/Context"
import { useContext } from "react"



const Products = (props) => {


    const { id, images, title, price } = props.data

    

    const { state, dispatch } = useContext(Redusersdata)


    return (

        <div className={`col-12 col-sm-6  col-lg-4 col-xl-3 ${styles.boxCol}`} key={id}>


            <div className={styles.boxProduct}>
                <Link href={`/${id}`} >
                    <Image src={images[0]} alt="photo product" width={200} height={200} />

                    <h4>{shortTitle(title)}</h4>
                    <div className="row justify-content-between align-items-center">
                        <div className="col-12">
                            <p className={`${styles.price}`}>{price} $</p>
                        </div>

                    </div>

                </Link>
            </div>

        </div>
    );
};

export default Products;