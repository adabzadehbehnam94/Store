"use client"

import { useContext, useEffect, useState } from "react";
import Products from "./component/Products";
import { fetchdata } from "./functions/dataApi";
import { SearchContext } from "./component/Header";
import Redusersdata from "./component/Context";




export default function Home() {

  useEffect(() => {
    const data = async () => {
      const fetch = await fetchdata()
      setProducts(fetch)
    }

    data()
  }, [])

  const { SearchAct } = useContext(Redusersdata)
  const [products, setProducts] = useState(null)
  const searchArray = products?.filter((item) => {
    const title = item.title.split("")
    const title1 = title[0].toLowerCase()
    const title2 = title1 + title[1]
    return title1 === SearchAct | title2 === SearchAct | item.title === SearchAct
  })
  return (
    <div className="container">
      <div className="row mt-4">
        {
          SearchAct ?
            searchArray.length === 0 ? 
              <div className="h-100">

                <p className="text-center">not found</p>
              </div>
             : 
               searchArray?.map((item) => (
              <Products key={item.id} data={item} />
            ))
            :
            products?.map((item) => (
              <Products key={item.id} data={item} />
            ))
          
        }
      </div>

    </div>
  );
}
