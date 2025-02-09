const isinCart = (state , id)=>{
   const result =!!state.selectedItems.find((item => item.id === id))

   return result
}

const quantity = (state , id)=>{
   const data = state.selectedItems.find((item)=>item.id === id)
   const counter = data.cuantity > 1
   return counter
}

// const showQuantity = (state , id)=>{
//    const data = state.selectedItems.find((item)=> item.id === id)
//    return data.cuantity
// }

// const totalItems = (state)=>{
//    const data = state.selectedItems.map((item)=> state.counteritems.push())
//    return data
// }

const shortTitle = (title)=>{
   const short = title.split(" ")
   const result = `${short[0]} ${short[1]} ${short[2]}`
   return result
}


export {isinCart, quantity , shortTitle}