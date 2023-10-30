import { ethers } from "ethers";
import BANK from '../artifacts/Bank.json';
import MYCOIN from '../artifacts/MYCOIN.json';
import REWORD from '../artifacts/REWARD.json';
import { setupWeb3 } from "../features";
import {store} from "../store/store"
export const initWeb3 = async () => {
    try {
        if (window.ethereum) {
            const provider = new ethers.BrowserProvider(window.ethereum);
            const signer = await provider.getSigner();
            const bank = new ethers.Contract("0xCa8b1cC70Ee1399aB4288Cb3331Caa6B9FB26431", BANK.abi, signer);
            const mycoin = new ethers.Contract("0xCE5E2b9f48c6CF0247021954Cd0BA450b82DBAD4", MYCOIN.abi, signer);
            const reword = new ethers.Contract("0x2cD2feeB7922196D3b8B7644F8078ec8d50dda85", REWORD.abi, signer);
            window.ethereum.on('chainChanged', async () => {
                await initWeb3()
            });
            window.ethereum.on('accountsChanged', async () => {
                await initWeb3()
            });

            // store the web3Api
            store.dispatch(setupWeb3({bank, reword, mycoin, provider, signer}));

        } else {
            console.error('please install metamask');
            return { contract: null, provider: null, signer: null }
        }
    } catch (e) {
        console.error(e);
    }
};