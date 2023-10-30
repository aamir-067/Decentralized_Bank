import { ethers } from "ethers";
import { store } from "../store/store";

export const checkReword = async () =>{
    try{
        const {web3Api} = store.getState();
        if(web3Api.signer.address && web3Api.reword){
            const res = await web3Api.reword.balanceOf(web3Api.bank.target);
            return (ethers.toNumber(res));
        }else{
            console.log("Wallet not connected");
        }
    }catch(e){
        console.error(e);
    }
}