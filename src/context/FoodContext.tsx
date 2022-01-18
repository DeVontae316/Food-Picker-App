import React, { createContext, ReactChild, useState } from "react";

const initialState = {
    emoji:"",
    name:"",
    date:"",
    
}

type Food = {
    emoji:string;
    name:string;
    date:string
}

type Children = {
    children:React.ReactNode
}
type All = Required<Food>

export const FoodContext = createContext<{
    state:Required<Food>,
    setState:React.Dispatch<React.SetStateAction<Required<Food>>>
    
}>({
    state:{emoji:"",name:"",date:"",},
    setState:():void=>{},
})


export const ContextProvider = ({children}:Children)=>{
    const[state,setState] = useState<All>(initialState);
    return(
        <FoodContext.Provider value={{
            state,
            setState
        }}>
            {children}
        </FoodContext.Provider>
    )
}