"use client"
import React, { useContext } from 'react';
import { useState} from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from "../page.module.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt,faSquareMinus,faSquarePlus } from '@fortawesome/free-regular-svg-icons';
import Redusersdata from './Context';
import { isinCart , quantity , shortTitle ,showQuantity} from '../functions/isproduct';


const Products = (props) => {
    const {state , dispatch} = useContext(Redusersdata)

    const {id,images,title,price} = props.data
    
    
    return (
        
            <div className="col-12 col-sm-6  col-lg-4 col-xl-3" key={id}>
                <div className={styles.boxProduct}>
                    <Image src={images[0]} alt="photo product" width={200} height={200}/>
                    <Link href={`/${id}`}>{shortTitle(title)}</Link>
                    <div className="row justify-content-between align-items-center">
                        <div className="col-md-5 col-12">
                            <p className={`${styles.price}`}>{price} $</p>
                        </div>
                        
                        <div className="col-md-7 col-12 text-end">
                            
                            {isinCart(state, id) ? 
                                <>

                                    <button><FontAwesomeIcon onClick={()=> dispatch({type : "REMOVE_ITEM" , payload : props.data})} icon={faTrashAlt}/></button>
                                    {quantity(state , id) &&
                                        <button><FontAwesomeIcon onClick={()=> dispatch({type : "DECREASE" , payload : props.data})} icon={faSquareMinus}/></button>
                                    }
                                    
                                    <span className={styles.buynumber}>{showQuantity(state,id)}</span>

                                    <button type="button" >
                                        <FontAwesomeIcon onClick={()=> dispatch({type : "INCREASE" , payload : props.data})} icon={faSquarePlus}/>
                                    </button>

                                    
                                </>
                                
                             : 
                                    <button type="button" onClick={()=> dispatch({type : "ADD_ITEM", payload : props.data})} >
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M0 24C0 10.7 10.7 0 24 0L69.5 0c22 0 41.5 12.8 50.6 32l411 0c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3l-288.5 0 5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5L488 336c13.3 0 24 10.7 24 24s-10.7 24-24 24l-288.3 0c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5L24 48C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z"/></svg>
                                    </button>

                             }
                            
                            

                           
                        </div>
                        
                    </div>
                    
                
                </div>
            </div>
    );
};

export default Products;