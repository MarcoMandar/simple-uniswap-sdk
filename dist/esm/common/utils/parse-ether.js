import BigNumber from "bignumber.js";
import { parseEther as EthersParseEther } from "ethersv5/lib/utils";
/**
 * Convert a string value to wei
 * @param value The value
 */
export function parseEther(value) {
    return new BigNumber(EthersParseEther(new BigNumber(value).toFixed()).toHexString());
}
