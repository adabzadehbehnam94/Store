import notFound from "@/public/no-products-found.jpg"
import Image from "next/image"

export default function NotProduct(){
    return(
        <div className="bg-white mh-100" style={{height : "74vh" , verticalAlign : "middle"}}>
            <Image className="m-auto  d-block" src={notFound} alt="not found product" width={300} height={300}/>
        </div>
    )
}