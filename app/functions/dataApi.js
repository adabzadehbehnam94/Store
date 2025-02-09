"use server"
    const fetchdata = async ()=>{
      const result = await fetch("https://fakestoreapi.com/products",{
        method : "GET",
        cache:"no-store"
      })
      
      const data = await result.json()

      return data
    }

    export {fetchdata}

