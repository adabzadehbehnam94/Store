    const fetchdata = async ()=>{
      const result = await fetch("https://dummyjson.com/products?sortBy=id&order=desc",{
        cache:"no-store"
      })
      
      const data = await result.json()
      return data.products

    }

    const categories = async ()=>{
      const result = await fetch("https://dummyjson.com/products/category-list",{
        cache:"no-store"
      })
 
      const data = await result.json()

      return data
      
    }

    export {fetchdata , categories}

