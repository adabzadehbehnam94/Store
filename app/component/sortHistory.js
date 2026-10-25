"use client"
import style from "@/styles/products.module.css"
import { usePathname, useRouter, useSearchParams } from "next/navigation"
import { updateFilter } from "../functions/isproduct"


export default function SortHistory({ productsCount }) {
    
    const router = useRouter()
    const pathName = usePathname()
    const searchParams = useSearchParams()
   
    return (
        <div className="d-flex justify-content-between">
            <p>{productsCount} Products</p>
            <select onChange={(item) => updateFilter("sort" , item.target.value ,searchParams , pathName , router)} className={style.sort} >
                <option value="desc" key="1">newest first</option>
                <option value="asc" key="2">old first</option>
            </select>
        </div>
    )
}