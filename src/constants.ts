import JSBI from 'jsbi'

// exports for external consumption
export type BigintIsh = JSBI | bigint | string

export const DEFAULT_CHAIN_ID = 1;

export enum ChainId {
  MAINNET = 1,
  ROPSTEN = 3,
  RINKEBY = 4,
  GÖRLI = 5,
  KOVAN = 42
}

export enum TradeType {
  EXACT_INPUT,
  EXACT_OUTPUT
}

export enum Rounding {
  ROUND_DOWN,
  ROUND_HALF_UP,
  ROUND_UP
}

export const FACTORY_ADDRESS: { [chainId in ChainId]: string } = {
  [ChainId.MAINNET]: '0xdad44c139a476c7a17fc8141e6db680e9abc9f56fe249a105094c44382c2fd',
  [ChainId.GÖRLI]: '0x451b5a258fb777734ba814ea86647e576b5b8ebb9e324e36aaae65952637076',
  [ChainId.ROPSTEN]: '0x451b5a258fb777734ba814ea86647e576b5b8ebb9e324e36aaae65952637076',
  [ChainId.KOVAN]: '0x451b5a258fb777734ba814ea86647e576b5b8ebb9e324e36aaae65952637076',
  [ChainId.RINKEBY]: '0x451b5a258fb777734ba814ea86647e576b5b8ebb9e324e36aaae65952637076',
}

export const PAIR_CLASS_HASH: { [chainId in ChainId]: string } = {
  [ChainId.MAINNET]: '0x2b39bc3f4c1fd5bef8b7d21504c44e0da59cf27b350551b13d913da52e40d3b',
  [ChainId.GÖRLI]: '0x3365fcd8961491b33431a531ce18d98fb0ce91903bdf55efa4a37a710da462c',
  [ChainId.ROPSTEN]: '0x3365fcd8961491b33431a531ce18d98fb0ce91903bdf55efa4a37a710da462c',
  [ChainId.KOVAN]: '0x3365fcd8961491b33431a531ce18d98fb0ce91903bdf55efa4a37a710da462c',
  [ChainId.RINKEBY]: '0x3365fcd8961491b33431a531ce18d98fb0ce91903bdf55efa4a37a710da462c',
}

export const PAIR_PROXY_CLASS_HASH: { [chainId in ChainId]: string } = {
  [ChainId.MAINNET]: '0x7b5cd6a6949cc1730f89d795f2442f6ab431ea6c9a5be00685d50f97433c5eb',
  [ChainId.GÖRLI]: '0x2f5ed917279fe43b90d30477dff16bd4fc9e1f50d9bfabc13445f249d1d8243',
  [ChainId.ROPSTEN]: '0x2f5ed917279fe43b90d30477dff16bd4fc9e1f50d9bfabc13445f249d1d8243',
  [ChainId.KOVAN]: '0x2f5ed917279fe43b90d30477dff16bd4fc9e1f50d9bfabc13445f249d1d8243',
  [ChainId.RINKEBY]: '0x2f5ed917279fe43b90d30477dff16bd4fc9e1f50d9bfabc13445f249d1d8243',
}

export const FEE_TO_SETTER_ADDRESS: { [chainId in ChainId]: string } = {
  [ChainId.MAINNET]: '0x284a1ad6382cffc520d8f711cf9519ccf43b3c105b89ef081cbe1a625322410',
  [ChainId.GÖRLI]: '0x70Fa774F9B24FC18C1f6d354caEfF34b8DDcfbCd154AA33E89E24BCEb7336bA',
  [ChainId.ROPSTEN]: '0x284a1ad6382cffc520d8f711cf9519ccf43b3c105b89ef081cbe1a625322410',
  [ChainId.KOVAN]: '0x284a1ad6382cffc520d8f711cf9519ccf43b3c105b89ef081cbe1a625322410',
  [ChainId.RINKEBY]: '0x284a1ad6382cffc520d8f711cf9519ccf43b3c105b89ef081cbe1a625322410',
}

export const MINIMUM_LIQUIDITY = JSBI.BigInt(1000)

// exports for internal consumption
export const ZERO = JSBI.BigInt(0)
export const ONE = JSBI.BigInt(1)
export const TWO = JSBI.BigInt(2)
export const THREE = JSBI.BigInt(3)
export const FIVE = JSBI.BigInt(5)
export const TEN = JSBI.BigInt(10)
export const _100 = JSBI.BigInt(100)
export const _997 = JSBI.BigInt(997)
export const _1000 = JSBI.BigInt(1000)

export enum SolidityType {
  uint8 = 'uint8',
  uint256 = 'uint256'
}

export const SOLIDITY_TYPE_MAXIMA = {
  [SolidityType.uint8]: JSBI.BigInt('0xff'),
  [SolidityType.uint256]: JSBI.BigInt('0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff')
}
