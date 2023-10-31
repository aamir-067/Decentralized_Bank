import {initWeb3} from './web3Init';
import { getStackedAmount as fetchTotalTokens } from './getStakedTokens';
import { stackCoins } from './stackCoins';
import { depositReword } from './onlyAdmin/depositReword';
import { withdrawCoins } from './withdrawCoins';
import { checkAddressDetails } from './checkAddressDetails';
export {initWeb3, fetchTotalTokens, stackCoins,checkAddressDetails, depositReword, withdrawCoins}