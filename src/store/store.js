import {configureStore} from "@reduxjs/toolkit"
import { web3Reduceres } from "../features";
export const store = configureStore({
    reducer : {
        web3Api : web3Reduceres
    },
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
        serializableCheck: false,
    }),
});