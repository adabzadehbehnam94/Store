    const fetchdata = async ()=>{
      const result = await fetch("https://fakestoreapi.com/products",{
        cache:"no-store"
      })
 
      const data = await result.json()

      return data
    }

    export {fetchdata}

