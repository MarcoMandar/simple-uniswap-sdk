export declare class CacheManager {
    cache: {};
    constructor();
    getCacheKey(fromToken: string, toToken: string): string;
    get(fromToken: string, toToken: string): any;
    set(fromToken: string, toToken: string, data: any): void;
    isValid(fromToken: string, toToken: string): boolean;
}
