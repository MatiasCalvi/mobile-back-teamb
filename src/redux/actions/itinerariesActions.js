import {createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { BASE_URL } from "../../api/url";



  const getItinerariesUser = createAsyncThunk("getCitiesUser", async (userId) => {
  
    try {
      const res = await axios.get(
        `${BASE_URL}/itineraries?userId=${userId}`
      );

      console.log(res.data.itinerary);
      return { itinerary: res.data.itinerary };
    } catch (error) {
      console.log(error);
      return {
        payload: "Error",
      };
    }
  });

  const getAndDestroy = createAsyncThunk("getAndDestroy", async ({ItineryId})=> {
    try {
      const res = await axios.delete(
        `${BASE_URL}/itineraries/${ItineryId}`
      )
      if (res.data.success){
        return {
          success: true,
          response: res.data.success
        }
      } else {
        return {
          success: false,
          response: res.data.message
        }
      }
    }catch (error) {
      console.log(error)
      return {
        payload: "Error"
      }
    }
  })

  const getAndEdit = createAsyncThunk("getAndEdit", async ({data, go})=> {

    let url = `${BASE_URL}/itineraries/${go}`
    
    try {
      let res = await axios.put(url,data)
      console.log(res.data) 
      if (res.data.success){
        return {
          success: true,
          response: data,
          responseid: res.data.success
        }
      } else {
        return {
          success: false,
          response: res.data.message
        }
      } 
    } catch(error) {
      return {
        success: false,
        response: 'un error'
      }
    }
  })
  const itineraryCreation = createAsyncThunk("itineraryCreation", async (data) => {
    
    const url=`${BASE_URL}/itineraries`
  
      try {
      
        let res = await axios.post(url,data)
        console.log(res)
        if(res.data.success){
            
            return {success:true, response:data}
  
        }
        else{
            
            return {success:false, response: res.data.message}
  
        } 
      } catch (error) {

            return {success:false, response:error.response.data.message}  
  
      }
});



const itinerariesActions = {
  getItinerariesUser,
  getAndDestroy,
  getAndEdit,
  itineraryCreation
};

export default itinerariesActions;
