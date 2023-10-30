import { store } from "../store/store";
import { checkReword } from "./checkReword";

export const stackCoins = async ({tokenAmount}) =>{
    try{
        const {web3Api} = store.getState();
        if(web3Api.signer.address){

            // check weather there is some reword available
            const availReword = await checkReword();
            if(!availReword){
                console.log("Sorry the Reword Tokens are distributed successfully");
                return;
            }
            
            
            const approval = await web3Api.mycoin.approve(web3Api.bank.target, tokenAmount * (10 ** 3));
            await approval.wait();
            const transfer = await web3Api.bank.deposit(tokenAmount);
            return true;

        }else{
            console.log("Wallet not connected");
        }
    }catch(e){
        console.error(e);
    }
}