export class CacheManager {
  cache: {};
  constructor() {
    this.cache = {};
  }

  getCacheKey(fromToken: string, toToken: string) {
    // Serialize the array of tokens into a string of their contract addresses
    return `${fromToken}-${toToken}`;
  }

  get(fromToken: string, toToken: string) {
    const key = this.getCacheKey(fromToken, toToken);
    return this.cache[key];
  }

  set(fromToken: string, toToken: string, data: any) {
    const key = this.getCacheKey(fromToken, toToken);
    this.cache[key] = {
      lastFetch: Date.now(),
      data: data,
    };
  }

  isValid(fromToken: string, toToken: string) {
    const cacheEntry = this.get(fromToken, toToken);
    if (!cacheEntry) return false;

    const fiveMinutes = 300000; // 5 minutes in milliseconds
    return Date.now() - cacheEntry.lastFetch < fiveMinutes;
  }
}
