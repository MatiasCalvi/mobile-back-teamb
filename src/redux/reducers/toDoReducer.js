import { createReducer } from "@reduxjs/toolkit";
import toDoActions from "../actions/toDoActions";

const {getCitiesFilter,getCities,newCity,getCitiesUser,getAndEdit,getAndDestroy}= toDoActions

const initialState={
    value1: "",
    value2: [],
    cities: [],
    categories:[],
    citiesAdmin:[],
    cityId:"",
}

const toDoReducer = createReducer(initialState,
    (builder)=>{
        builder
        .addCase(getCities.fulfilled,(state,action)=>{
            let categories=Array.from(new Set(action.payload.cities.map(city=>city.continent)))
            
                return {
                    ...state,
                    categories,
                    cities: action.payload.cities
                }
        })
        .addCase(getCitiesFilter.fulfilled,(state,action)=>{
            console.log(action.payload)
            
                return {
                    ...state,
                    value1:action.payload.value1,
                    cities: action.payload.cities
                }
        })
        .addCase(newCity.fulfilled,(state,action)=>{
            if(action.payload.success){
                state.cities.push(action.payload.response)
            }
        })
        .addCase(getCitiesUser.fulfilled,(state,action)=>{
               
            return {
                    ...state,
                    citiesAdmin: action.payload.cities
                }
        })
        .addCase(getAndDestroy.fulfilled,(state,action)=>{
            return {
                ...state,
                cityId : action.payload.cityId
            }
        })
        .addCase(getAndEdit.fulfilled,(state,action)=>{
           
            if (action.payload.success) {
                return {
                        ...state,
                        cityId : action.payload.cityId
                        }
                    }
                })
})

export default toDoReducer;