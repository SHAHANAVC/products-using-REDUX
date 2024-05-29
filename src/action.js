import axios from "axios";

import { SUCCESS,FAIL } from "./constants";


 const productlist=()=>async(dispatch)=>{
    try{
        const {data}=await axios.get("https://fakestoreapi.com/products")
        console.log(data);
        dispatch({
            payload:data,type:SUCCESS
        })
    }        
    catch(error){
        dispatch({
            payload:error,type:FAIL
        })
    }

    
}
export default productlist