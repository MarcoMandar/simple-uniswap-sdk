"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CacheManager = void 0;
var CacheManager = /** @class */ (function () {
    function CacheManager() {
        this.cache = {};
    }
    CacheManager.prototype.getCacheKey = function (fromToken, toToken) {
        // Serialize the array of tokens into a string of their contract addresses
        return fromToken + "-" + toToken;
    };
    CacheManager.prototype.get = function (fromToken, toToken) {
        var key = this.getCacheKey(fromToken, toToken);
        return this.cache[key];
    };
    CacheManager.prototype.set = function (fromToken, toToken, data) {
        var key = this.getCacheKey(fromToken, toToken);
        this.cache[key] = {
            lastFetch: Date.now(),
            data: data,
        };
    };
    CacheManager.prototype.isValid = function (fromToken, toToken) {
        var cacheEntry = this.get(fromToken, toToken);
        if (!cacheEntry)
            return false;
        var fiveMinutes = 300000; // 5 minutes in milliseconds
        return Date.now() - cacheEntry.lastFetch < fiveMinutes;
    };
    return CacheManager;
}());
exports.CacheManager = CacheManager;
