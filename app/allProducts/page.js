"use client"
import { useEffect, useState } from "react";
import HeaderProductPage from "../component/headerProductPage";
import { fetchdata } from "../functions/dataApi";
import { brands, brandsLength, categories, categoriesLength } from "../functions/isproduct";


export default function AllProducts() {
    const [Data, setData] = useState(null)

    useEffect(() => {
        const getData = async () => {
            const data = await fetchdata()
            setData(data)
        }

        getData()
    }, [])

    console.log(brands(Data));
    


    return (
        <>
            <HeaderProductPage />
            <div className="container">
                <div className="row gap-5">
                    <div className="col-4 px-3">
                        <div>
                            <h3>categories</h3>
                            <div className="d-flex justify-content-between">
                                <div className="d-flex gap-2 align-items-center">
                                    <input type="checkbox" value={"allproducts"} />
                                    <p className="ml-2">All Products</p>
                                </div>
                                <p>{Data?.length}</p>
                            </div>
                            {categories(Data).map((item => (
                                <div className="d-flex justify-content-between" key={item}>
                                    <div className="d-flex gap-2 align-items-center">
                                        <input type="checkbox" value={item} />
                                        <p className="ml-2">{item}</p>
                                    </div>
                                    <p>{categoriesLength(Data , item)}</p>
                                </div>
                            )))}
                        </div>

                        <div>
                            <h3>Brands</h3>
                            <div className="d-flex justify-content-between">
                                <div className="d-flex gap-2 align-items-center">
                                    <input type="checkbox" value={"allproducts"} />
                                    <p className="ml-2">All Brands</p>
                                </div>
                                <p>{Data?.length}</p>
                            </div>
                            {brands(Data).map((item => (
                                <div className="d-flex justify-content-between" key={item}>
                                    <div className="d-flex gap-2 align-items-center">
                                        <input type="checkbox" value={item} />
                                        <p className="ml-2">{item}</p>
                                    </div>
                                    <p>{brandsLength(Data, item)}</p>
                                </div>
                            )))}
                        </div>
                    </div>
                    <div className="col-8"></div>
                </div>
            </div>
        </>

    )
}