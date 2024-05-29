import { SUCCESS,FAIL } from "./constants";


 const homereducer=(state={data:[]},action)=>{
        console.log(action.type);
        switch(action.type)
    {
        case SUCCESS:return{
            data:action.payload
        }
        case FAIL:return{
            data:action.payload
        }
        default:
            return state
    }
}

export default homereducer
