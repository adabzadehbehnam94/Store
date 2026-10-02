
// import { useEffect, useState } from "react";
import HeaderProductPage from "../component/headerProductPage";
import { categories, fetchdata } from "../functions/dataApi";
import { brands, brandsLength, categoriesLength } from "../functions/isproduct";
import Products from "../component/Products";
import CategoryChanger from "./categoryChanger";
import SortHistory from "../component/sortHistory";


export default async function AllProducts({searchParams}) {
    

    const params = await searchParams
    const categorySort = params.category
    const sorthistory = params.sort

    let productsData = await fetch("https://dummyjson.com/products?sortBy=id&order=desc")
    
    if(categorySort){
        productsData = await fetch(`https://dummyjson.com/products/category/${categorySort}`)
    }

    if(sorthistory){
        if(categorySort){
          productsData = await fetch(`https://dummyjson.com/products/category/${categorySort}?sortBy=id&order=${sorthistory}`)
        }else{
            productsData = await fetch(`https://dummyjson.com/products?sortBy=id&order=${sorthistory}`)
        }
        
    }

   
    const result = await productsData.json()

    const categoryData = await categories()



    return (
        <>
            <HeaderProductPage />
            <div className="container">
                <div className="row gap-5">
                    <div className="col-3 px-3">
                       <CategoryChanger data={result?.products} category={categoryData}/>
                    </div>
                    <div className="col-8">
                        <SortHistory productsCount={result?.products.length}/>

                        <div className="row">
                            {
                                result?.products.map((item) => (
                                    <Products key={item.id} data={item} />
                                ))
                            }
                        </div>
                    </div>
                </div>
            </div>
        </>

    )
}