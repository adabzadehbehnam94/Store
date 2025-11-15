    const fetchdata = async ()=>{
      const result = await fetch("https://dummyjson.com/products",{
        cache:"no-store"
      })
 
      const data = await result.json()

      return data.products
      
    }

    export {fetchdata}

