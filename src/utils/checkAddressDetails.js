import { ethers } from "ethers";
import { store } from "../store/store";

export const checkAddressDetails = async () =>{
    try{
        const {web3Api} = store.getState();
        if(web3Api.signer.address && web3Api.bank){
            const res = await web3Api.bank.depositors(web3Api.signer.address);
            console.log(res);
            return res;
        }else{
            console.log("Wallet not connected");
            return undefined;
        }
    }catch(e){
        console.error(e);
        return null;
    }
}