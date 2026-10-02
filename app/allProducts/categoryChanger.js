"use client"

import { usePathname, useRouter, useSearchParams } from "next/navigation"
import { updateFilter } from "../functions/isproduct"
import { useState } from "react"


export default function CategoryChanger({ data, category }) {

    const router = useRouter()
    const pathName = usePathname()
    const searchParams = useSearchParams()
    const [selectedCategory, setSelectedCategory] = useState("")
    const handeleCheckBox = (value) => {
        setSelectedCategory(value)
    }


    return (
        <>
            <div>
                <h3>categories</h3>
                <div className="d-flex justify-content-between">
                    <div className="d-flex gap-2 align-items-center allover">
                        <input type="checkbox" checked={selectedCategory === "all"} onChange={() => handeleCheckBox("all")} value={"all"} onClick={() => updateFilter("category", "all", searchParams, pathName, router)} />
                        <p className="ml-2">All Products</p>
                    </div>
                    <p>{data?.length}</p>
                </div>
                {category?.map((item => (

                    // categoriesLength(data , item) !== 0 &&
                    <div className="d-flex justify-content-between" key={item}>
                        <div className="d-flex gap-2 align-items-center">
                            <input type="checkbox"
                                onClick={() => updateFilter("category", item, searchParams, pathName, router)} value={item}
                                checked={selectedCategory === item}
                                onChange={() => handeleCheckBox(item)}
                            />
                            <p className="ml-2">{item}</p>
                        </div>
                        {/* <p>{categoriesLength(data , item)}</p> */}
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
                    <p>{data.length}</p>
                </div>
                {/* {brands(Data).map((item => (
                                <div className="d-flex justify-content-between" key={item}>
                                    <div className="d-flex gap-2 align-items-center">
                                        <input type="checkbox" value={item} />
                                        <p className="ml-2">{item}</p>
                                    </div>
                                    <p>{brandsLength(Data, item)}</p>
                                </div>
                            )))} */}
            </div>
        </>
    )
}