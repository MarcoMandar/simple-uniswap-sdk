var __awaiter =
  (this && this.__awaiter) ||
  function (thisArg, _arguments, P, generator) {
    function adopt(value) {
      return value instanceof P
        ? value
        : new P(function (resolve) {
            resolve(value);
          });
    }
    return new (P || (P = Promise))(function (resolve, reject) {
      function fulfilled(value) {
        try {
          step(generator.next(value));
        } catch (e) {
          reject(e);
        }
      }
      function rejected(value) {
        try {
          step(generator["throw"](value));
        } catch (e) {
          reject(e);
        }
      }
      function step(result) {
        result.done
          ? resolve(result.value)
          : adopt(result.value).then(fulfilled, rejected);
      }
      step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
  };
var __generator =
  (this && this.__generator) ||
  function (thisArg, body) {
    var _ = {
        label: 0,
        sent: function () {
          if (t[0] & 1) throw t[1];
          return t[1];
        },
        trys: [],
        ops: [],
      },
      f,
      y,
      t,
      g;
    return (
      (g = { next: verb(0), throw: verb(1), return: verb(2) }),
      typeof Symbol === "function" &&
        (g[Symbol.iterator] = function () {
          return this;
        }),
      g
    );
    function verb(n) {
      return function (v) {
        return step([n, v]);
      };
    }
    function step(op) {
      if (f) throw new TypeError("Generator is already executing.");
      while (_)
        try {
          if (
            ((f = 1),
            y &&
              (t =
                op[0] & 2
                  ? y["return"]
                  : op[0]
                  ? y["throw"] || ((t = y["return"]) && t.call(y), 0)
                  : y.next) &&
              !(t = t.call(y, op[1])).done)
          )
            return t;
          if (((y = 0), t)) op = [op[0] & 2, t.value];
          switch (op[0]) {
            case 0:
            case 1:
              t = op;
              break;
            case 4:
              _.label++;
              return { value: op[1], done: false };
            case 5:
              _.label++;
              y = op[1];
              op = [0];
              continue;
            case 7:
              op = _.ops.pop();
              _.trys.pop();
              continue;
            default:
              if (
                !((t = _.trys), (t = t.length > 0 && t[t.length - 1])) &&
                (op[0] === 6 || op[0] === 2)
              ) {
                _ = 0;
                continue;
              }
              if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) {
                _.label = op[1];
                break;
              }
              if (op[0] === 6 && _.label < t[1]) {
                _.label = t[1];
                t = op;
                break;
              }
              if (t && _.label < t[2]) {
                _.label = t[2];
                _.ops.push(op);
                break;
              }
              if (t[2]) _.ops.pop();
              _.trys.pop();
              continue;
          }
          op = body.call(thisArg, _);
        } catch (e) {
          op = [6, e];
          y = 0;
        } finally {
          f = t = 0;
        }
      if (op[0] & 5) throw op[1];
      return { value: op[0] ? op[1] : void 0, done: true };
    }
  };
import { ChainId } from "../enums/chain-id";
import { UniswapVersion } from "../enums/uniswap-version";
import { UniswapPairSettings } from "../factories/pair/models/uniswap-pair-settings";
import { UniswapPair } from "../factories/pair/uniswap-pair";
import { ETH, /*EthersProvider,*/ TradeDirection } from "../index";
import { CacheManager } from "../factories/router/cache-manager";
// WBTC - 0x2260FAC5E5542a773Aa44fBCfeDf7C193bc2C599
// FUN - 0x419D0d8BdD9aF5e606Ae2232ed285Aff190E711b
// REP - 0x1985365e9f78359a9B6AD760e32412f4a445E862
// WETH - 0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2
// UNI - 0x1f9840a85d5af5bf1d1762f925bdaddc4201f984
// AAVE - 0x7fc66500c84a76ad7e9c93437bfc5ac33e2ddae9
// GTC - 0xde30da39c46104798bb5aa3fe8b9e0e1f348163f
var cacheManager = new CacheManager();
var routeTest = function () {
  return __awaiter(void 0, void 0, void 0, function () {
    var fromTokenContractAddress,
      toTokenContractAddress,
      ethereumAddress,
      uniswapPair,
      uniswapPairFactory,
      trade,
      expectedConvertQuote,
      baseConvertRequest,
      expectedConvertQuote2;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          fromTokenContractAddress = ETH.MAINNET().contractAddress;
          toTokenContractAddress = "0xc9F00080d96cEA3Ef92D2E2e563d4cD41fB5Bb36";
          ethereumAddress = "0x37c81284caA97131339415687d192BF7D18F0f2a";
          uniswapPair = new UniswapPair({
            fromTokenContractAddress: fromTokenContractAddress,
            toTokenContractAddress: toTokenContractAddress,
            ethereumAddress: ethereumAddress,
            chainId: ChainId.MAINNET,
            cacheManager: cacheManager,
            settings: new UniswapPairSettings({
              // if not supplied it use `0.005` which is 0.5%;
              // all figures
              slippage: 0.15,
              // if not supplied it will use 20 a deadline minutes
              deadlineMinutes: 20,
              disableMultihops: false,
              uniswapVersions: [UniswapVersion.v2, UniswapVersion.v3],
              gasSettings: {
                getGasPrice: function () {
                  return __awaiter(void 0, void 0, void 0, function () {
                    return __generator(this, function (_a) {
                      return [2 /*return*/, "90"];
                    });
                  });
                },
              },
            }),
          });
          return [4 /*yield*/, uniswapPair.createFactory()];
        case 1:
          uniswapPairFactory = _a.sent();
          return [
            4 /*yield*/,
            uniswapPairFactory.trade("1000000", TradeDirection.input),
          ];
        case 2:
          trade = _a.sent();
          // console.log(new Date().getTime() - startTime);
          console.log(trade);
          expectedConvertQuote = parseFloat(trade.expectedConvertQuote);
          baseConvertRequest = parseFloat(trade.baseConvertRequest);
          expectedConvertQuote2 = parseFloat(trade.expectedConvertQuote);
          console.log({
            expectedConvertQuote: expectedConvertQuote,
            baseConvertRequest: baseConvertRequest,
            expectedConvertQuote2: expectedConvertQuote2,
          });
          return [2 /*return*/];
      }
    });
  });
};
var runTestWithDelay = function (delay, count) {
  if (count === void 0) {
    count = 3;
  }
  return __awaiter(void 0, void 0, void 0, function () {
    var i, start, end, duration;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          i = 0;
          _a.label = 1;
        case 1:
          if (!(i < count)) return [3 /*break*/, 5];
          console.log(
            "Running test iteration: " +
              (i + 1) +
              " - Timestamp: " +
              new Date().toISOString()
          );
          start = new Date().getTime();
          return [4 /*yield*/, routeTest()];
        case 2:
          _a.sent();
          end = new Date().getTime();
          duration = end - start;
          console.log(
            "Iteration " +
              (i + 1) +
              " completed. Time taken: " +
              duration +
              " ms"
          );
          console.log("------------------------------------");
          if (!(i < count - 1)) return [3 /*break*/, 4];
          return [
            4 /*yield*/,
            new Promise(function (resolve) {
              return setTimeout(resolve, delay);
            }),
          ];
        case 3:
          _a.sent();
          _a.label = 4;
        case 4:
          i++;
          return [3 /*break*/, 1];
        case 5:
          return [2 /*return*/];
      }
    });
  });
};
runTestWithDelay(2000);
