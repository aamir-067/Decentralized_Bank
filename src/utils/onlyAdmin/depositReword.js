import { store } from "../../store/store";

export const depositReword = async ({tokenAmount}) =>{
    try{
        const {web3Api} = store.getState();
        if(web3Api.signer.address){
            
            // check wheather its a owner or not.
            if(!(web3Api.signer.address === "0x9d4291b9F5F6C0eBDf807d6B98aF3EDFB4a9Bb0a")){// will replace later
                console.error("Sorry only the owner can deposit the reowrd to the bank");
                return null;
            } 
            

            const approval = await web3Api.reword.approve(web3Api.bank.target, tokenAmount * (10 ** 3));
            await approval.wait();
            const res = await  web3Api.bank.depositRewordToken(tokenAmount);
            await res.wait();
            return true;

        }else{
            console.log("Wallet not connected");
        }
    }catch(e){
        console.error(e);
    }
}