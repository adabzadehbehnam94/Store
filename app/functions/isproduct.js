const isinCart = (state, id) => {
   const result = !!state.selectedItems.find((item => item.id === id))

   return result
}

const quantity = (state, id) => {
   const data = state.selectedItems.find((item) => item.id === id)
   const counter = data.cuantity > 1
   return counter
}

const showQuantity = (state, id) => {
   const data = state.selectedItems.find((item) => item.id === id)
   return data.cuantity
}


const shortTitle = (title) => {
   const short = title.split(" ")
   const result = `${short[0]} ${short[1]} ${short[2]}`
   return result
}

const categories = (data) => {
   const categoryArray = []
   data?.map((item) => {
      categoryArray.push(item.category)
   })

   const removerDuplicate = new Set(categoryArray)

   const newCategory = [...removerDuplicate]

   return newCategory
}

const brands = (data) => {
   const brandArray = []

   data?.map((item) => {

      if (item.brand !== undefined) {
         brandArray.push(item.brand)
      }

   })

   const removerDuplicate = new Set(brandArray)

   const newbrand = [...removerDuplicate]

   return newbrand
}

const categoriesLength = (data, cData) => {
   const compare = data.filter(item => item.category === cData)

   return compare.length
}

const brandsLength = (data, cData) => {
   const compare = data.filter(item => item.brand === cData)

   return compare.length
}

const updateFilter = (name, value , searchParams , pathName , router) => {
   const search = new URLSearchParams(searchParams)
   if (value === "all") {
      search.delete(name)
   } else {
      search.set(name, value)
   }

   const queryString = search.toString()

   router.push(queryString ? `${pathName}?${queryString}` : `${pathName}`)
}


export { isinCart, quantity, shortTitle, showQuantity, categories, brands, categoriesLength, brandsLength ,updateFilter }