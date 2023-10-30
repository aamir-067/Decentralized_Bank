import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
     bank: null,
     reword: null,
     mycoin: null,
     provider: null,
    signer: null 
}

export const setupWeb3 = createAsyncThunk('web3Api/setupWeb3', async (web3Payload, thunkAPI) => {
    // your async calls here
    return {
        bank: web3Payload.bank,
        reword: web3Payload.reword,
        mycoin: web3Payload.mycoin,
        provider: web3Payload.provider,
        signer: web3Payload.signer,
    };
});

const web3Api = createSlice({
    name: 'web3Api',
    initialState,
    reducers: {
        initWeb3: (state, action) => {
            state.bank = action.payload.bank;
            state.mycoin = action.payload.mycoin;
            state.reword = action.payload.reword;
            state.signer = action.payload.signer;
            state.provider = action.payload.provider;
        }
    },
    extraReducers: (builder) => {
        builder.addCase(setupWeb3.fulfilled, (state, action) => {
            state.bank = action.payload.bank;
            state.mycoin = action.payload.mycoin;
            state.reword = action.payload.reword;
            state.signer = action.payload.signer;
            state.provider = action.payload.provider;
        });
    },
})
export const { initWeb3 } = web3Api.actions;
export default web3Api.reducer;