"use client"

import { usePathname, useRouter, useSearchParams } from "next/navigation"
import { updateFilter } from "../functions/isproduct"
import { useState } from "react"
import styles from "@/styles/products.module.css"


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
            <div className={`${styles.categories} d-none d-lg-block`}>
                <h3>categories</h3>
                <div className="d-flex justify-content-between">
                    <div className="d-flex gap-2 align-items-center allover">
                        <input type="checkbox" checked={selectedCategory === "all"} onChange={() => handeleCheckBox("all")} value={"all"} onClick={() => updateFilter("category", "all", searchParams, pathName, router)} />
                        <p className="ml-2">All Products</p>
                    </div>
                    <p>{data?.length}</p>
                </div>
                {category?.map((item => (

                    
                    <div className="d-flex justify-content-between" key={item}>
                        <div className="d-flex gap-2 align-items-center">
                            <input type="checkbox"
                                onClick={() => updateFilter("category", item, searchParams, pathName, router)} value={item}
                                checked={selectedCategory === item}
                                onChange={() => handeleCheckBox(item)}
                            />
                            <p className="ml-2">{item}</p>
                        </div>
                        
                    </div>
                )))}
            </div>

            <div className={`${styles.mobileCategory} d-block d-lg-none`}>
                <h3>categories</h3>
                <select onChange={(item) => updateFilter("category", item.target.value, searchParams, pathName, router)}>
                    <option value="all" key="all">allCategories</option>
                    {category.map((item)=>(
                        <option value={item} key={item}>{item}</option>
                    ))}
                </select>
            </div>
        </>
    )
}