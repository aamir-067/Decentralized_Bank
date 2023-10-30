import {initWeb3} from './web3Init';
import { getStackedAmount as fetchTotalTokens } from './getStakedTokens';
import { stackCoins } from './stackCoins';
import { depositReword } from './onlyAdmin/depositReword';
import { withdrawCoins } from './withdrawCoins';
export {initWeb3, fetchTotalTokens, stackCoins, depositReword, withdrawCoins}