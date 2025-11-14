import Products from "./component/Products";
import { fetchdata } from "./functions/dataApi";



export default async function Home() {
  
  const products = await fetchdata()
    
  return (
    <div className="container">
        <div className="row mt-4">
            {
              products?.map((item)=>(
                  <Products key={item.id}  data={item}/>
              ))
            }
        </div>
      
    </div>
  );
}
