import { EthersProvider } from "../../../ethers-provider";
import { Token } from "../../token/models/token";
import { UniswapPairSettings } from "./uniswap-pair-settings";

export interface UniswapPairFactoryContext {
  fromToken: Token;
  toToken: Token;
  ethereumAddress: string;
  settings: UniswapPairSettings;
  ethersProvider: EthersProvider;
  cacheManager: CacheManagerContext;
}

export interface CacheManagerContext {
  cache: {};
  getCacheKey(fromToken: string, toToken: string): string;
  get(fromToken: string, toToken: string): any;
  set(fromToken: string, toToken: string, data: any): void;
  isValid(fromToken: string, toToken: string): boolean;
}
