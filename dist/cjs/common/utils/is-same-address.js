"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isSameAddress = void 0;
var ethersv5_1 = require("ethersv5");
var eth_1 = require("../tokens/eth");
function isSameAddress(address1, address2) {
    return (ethersv5_1.ethers.utils.isAddress(eth_1.removeEthFromContractAddress(address1)) &&
        ethersv5_1.ethers.utils.isAddress(eth_1.removeEthFromContractAddress(address2)) &&
        address1.toLowerCase() === address2.toLowerCase());
}
exports.isSameAddress = isSameAddress;
