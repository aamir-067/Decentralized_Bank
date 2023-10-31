import { ethers } from "ethers";
import { store } from "../store/store";
import { useActionData } from "react-router-dom";

export const withdrawCoins = async ({tokenAmount}) =>{
    try{
        const {web3Api} = store.getState();
        if(web3Api?.signer?.address){

            if(tokenAmount <= 0){console.log("Tokens must be greater the 0"); return;}


            // check weather there is some tokens already staked
            const usrDetails = await web3Api.bank.depositors(web3Api.signer.address);

            if(!ethers.toNumber(usrDetails[0])){
                console.log("Sorry Don't have Stacked tokens");
                return;
            }

            console.log('=====>',ethers.toNumber(usrDetails[0]));

            const res = await web3Api.bank.withdraw(tokenAmount);
            // await res.wait();
            return true;

        }else{
            console.log("Wallet not connected");
        }
    }catch(e){
        console.error(e);
    }
}