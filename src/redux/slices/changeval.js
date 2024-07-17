import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { songsApi } from "../../body/utils/urls";


const changeValueSlice = createSlice({
    name :"ChangingValue",
    initialState:{
        value : {},
        status : "",

    },
    reducers :{ },
    extraReducers : (builder) => {
        builder.addCase(getSongs.fulfilled,(state,{payload})=>{
            state.value = payload
            state.status = "Successful"

        })

        builder.addCase(getSongs.rejected, (state,{payload})=>{
            state.status = "rejected"
        })

        builder.addCase(getSongs.pending,(state, {payload}) => {
            state.status = "pending"
        })
    }
}) 

export const getSongs = createAsyncThunk("/getSongs",async(args)=>{
    try {
        const {data} = await axios.get(songsApi +args)

        return data.data.results
    } catch (error) {
        console.log({err : error})
    }
})


export default changeValueSlice