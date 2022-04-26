import {  IS_LOADING } from "./actionType";
import { SIGN_UP } from "./actionType";
import { IS_ERROR} from "./actionType";


export const isLoading = ()=>({
    type: IS_LOADING,
    
});

export const isSignup = (data)=>({
    type: SIGN_UP,
    payload: data
});

export const isError = (data)=>({
    type: IS_ERROR,
    payload: data
});