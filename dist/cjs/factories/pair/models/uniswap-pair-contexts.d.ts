import { ChainId } from '../../../enums/chain-id';
import { UniswapPairSettings } from './uniswap-pair-settings';
import { CacheManagerContext } from './uniswap-pair-factory-context';
interface UniswapPairContextBase {
    fromTokenContractAddress: string;
    toTokenContractAddress: string;
    ethereumAddress: string;
    settings?: UniswapPairSettings | undefined;
    cacheManager?: CacheManagerContext;
}
export interface UniswapPairContextForEthereumProvider extends UniswapPairContextBase {
    ethereumProvider: any;
}
export interface UniswapPairContextForChainId extends UniswapPairContextBase {
    chainId: ChainId | number;
}
export interface UniswapPairContextForProviderUrl extends UniswapPairContextForChainId {
    providerUrl: string;
}
export {};
