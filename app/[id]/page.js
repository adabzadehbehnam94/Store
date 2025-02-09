import Image from "next/image"

const fetchdata = async (id)=>{
    const result = await fetch(`https://fakestoreapi.com/products/${id}`)
    return await result.json()
    
  }

export default async function Product({params}){
    const para = await params
    // console.log(para.id);
    
    const fetch = await fetchdata(para.id)
    return(
        <div className="container">
            <Image src={fetch.image} width={200} height={120} alt="product"/>
            <p>{fetch.title}</p>
            <p>{fetch.description}</p>
            <p>{fetch.rating.rate}</p>
            <p>{fetch.price} $</p>

        </div>
        
    )
}