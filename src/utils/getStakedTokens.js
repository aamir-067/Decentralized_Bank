import { ethers } from "ethers";
import BANK from '../artifacts/Bank.json';
export const getStackedAmount = async()=>{
    try{
        if(window.ethereum){
            const provider = new ethers.BrowserProvider(window.ethereum);
            const bank = new ethers.Contract("0xCa8b1cC70Ee1399aB4288Cb3331Caa6B9FB26431", BANK.abi, provider);
            const res = await bank.totalStakedAmount();
            return ethers.toNumber(res);
        }else{
            return null;
        }
    }catch(e){
        console.error(e);
    }
}