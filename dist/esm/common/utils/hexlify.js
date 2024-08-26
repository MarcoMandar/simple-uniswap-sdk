import { BigNumber as EthersBigNumber } from "ethers";
import { hexlify as EthersHexlify } from "ethersv5/lib/utils";
/**
 * Convert to hex
 * @param value The value
 */
export function hexlify(value) {
    return EthersHexlify(EthersBigNumber.from(value.toFixed(0)));
}
