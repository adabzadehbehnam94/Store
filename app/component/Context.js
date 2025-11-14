"use client"
import { login, me } from "./authentication"
const { useReducer, createContext, useState, useEffect } = require("react")

const initialstate={
    selectedItems:[],
    counteritems :0,
    total : 0,
    checkout : false
}

const sumItems = (items)=>{
    let counteritems = items.reduce((total , product)=> total + product.cuantity, 0);
    let total = items.reduce((total , product)=> total + product.cuantity * product.price, 0).toFixed(2);
    return {counteritems,total}
}

const reduser = (state , action)=>{
    
    
    switch (action.type) {
        case "ADD_ITEM":
            if(!state.selectedItems.find((item)=> item.id === action.payload.id)){
                state.selectedItems.push({
                    ...action.payload,
                    cuantity : 1
                }
            )
     
            }
            
            return{
                ...state,
                ...sumItems(state.selectedItems),
                selectedItems : [...state.selectedItems]
                
            }
            
        case "REMOVE_ITEM":
            const selected = state.selectedItems.filter((item) => item.id != action.payload.id)
            const removeQuantity = state.selectedItems.findIndex(item => item.id === action.payload.id)
            state.selectedItems[removeQuantity].cuantity = 0
            
            return{
                ...state,
                selectedItems : [...selected],
                ...sumItems(state.selectedItems)
            }

        case "INCREASE" :
            const hasProduct = state.selectedItems.findIndex((item)=> item.id === action.payload.id)
            state.selectedItems[hasProduct].cuantity++
            // console.log(hasProduct);
            
            
            return{
                ...state,
                ...sumItems(state.selectedItems)
            }

        case "DECREASE" :
            const hasProductMinus = state.selectedItems.findIndex((item)=> item.id === action.payload.id)
            state.selectedItems[hasProductMinus].cuantity--
        
            return{
                ...state,
                ...sumItems(state.selectedItems)
            }
        case "CHECKOUT":
        
            return{
                selectedItems:[],
                counteritems :0,
                total : 0,
                checkout : true
            }

        case "CANCELL":
        
            return{
                selectedItems:[],
                counteritems :0,
                total : 0,
                checkout : false
            }

        case "BACK" :
            return{
                ...state,
                checkout : false
            }  

        default:
            return state
    }
}

const Redusersdata = createContext()



export const Context =({children})=>{
    const[state , dispatch] = useReducer(reduser , initialstate)
    const [user , setuser] = useState(null)
    const handleUser = (user)=> setuser(user)
    const logoutUser = ()=> setuser(null)
    // useEffect(()=>{
    //     const getData = async ()=>{
    //         const data = await me()
    //         if(data?.user){
    //             setuser(data?.user)
    //             console.log(data?.user);
                
    //         }else{
    //             setuser(null)
    //         }
            
    //     }
    //     getData()
    // },[])
    
    return(
        <Redusersdata.Provider value={{state , dispatch ,user , handleUser ,logoutUser}}>
            {children}
        </Redusersdata.Provider>
    )
}

export default Redusersdata






