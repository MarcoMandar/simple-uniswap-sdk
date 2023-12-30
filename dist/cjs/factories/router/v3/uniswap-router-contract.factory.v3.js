"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UniswapRouterContractFactoryV3 = void 0;
var uniswap_contract_context_v3_1 = require("../../../uniswap-contract-context/uniswap-contract-context-v3");
var UniswapRouterContractFactoryV3 = /** @class */ (function () {
    function UniswapRouterContractFactoryV3(_ethersProvider, _routerAddress, _routerAbi) {
        if (_routerAddress === void 0) { _routerAddress = uniswap_contract_context_v3_1.UniswapContractContextV3.routerAddress; }
        if (_routerAbi === void 0) { _routerAbi = uniswap_contract_context_v3_1.UniswapContractContextV3.routerAbi; }
        this._ethersProvider = _ethersProvider;
        this._routerAddress = _routerAddress;
        this._routerAbi = _routerAbi;
        this._uniswapRouterContract = this._ethersProvider.getContract(JSON.stringify(this._routerAbi), this._routerAddress);
    }
    /**
     * Exact input single
     * @param params The parameters
     */
    UniswapRouterContractFactoryV3.prototype.exactInputSingle = function (params) {
        return this._uniswapRouterContract.interface.encodeFunctionData('exactInputSingle', [params]);
    };
    /**
     * The exact output single
     * @param params The parameters
     */
    UniswapRouterContractFactoryV3.prototype.exactOutputSingle = function (params) {
        return this._uniswapRouterContract.interface.encodeFunctionData('exactOutputSingle', [params]);
    };
    /**
     * Exact input
     * @param params The parameters
     */
    UniswapRouterContractFactoryV3.prototype.exactInput = function (params) {
        return this._uniswapRouterContract.interface.encodeFunctionData('exactInput', [params]);
    };
    /**
     * The exact output
     * @param params The parameters
     */
    UniswapRouterContractFactoryV3.prototype.exactOutput = function (params) {
        return this._uniswapRouterContract.interface.encodeFunctionData('exactOutput', [params]);
    };
    /**
     * Unwrap eth
     * @param amountMinimum The amount min
     * @param recipient The recipient
     */
    UniswapRouterContractFactoryV3.prototype.unwrapWETH9 = function (amountMinimum, recipient) {
        return this._uniswapRouterContract.interface.encodeFunctionData('unwrapWETH9', [amountMinimum, recipient]);
    };
    /**
     * Multicall used for uniswap v3
     * @param data The data array (many calls)
     */
    UniswapRouterContractFactoryV3.prototype.multicall = function (data) {
        return this._uniswapRouterContract.interface.encodeFunctionData('multicall', [data]);
    };
    return UniswapRouterContractFactoryV3;
}());
exports.UniswapRouterContractFactoryV3 = UniswapRouterContractFactoryV3;
