import currencyFormatter from 'currency-formatter';
import currencies from 'currency-formatter/currencies';
import BigNumber from 'bignumber.js';
import { addHexPrefix } from '../../../../app/scripts/lib/util';

import { unconfirmedTransactionsCountSelector } from '../../selectors';
import {
  conversionUtil,
  addCurrencies,
  multiplyCurrencies,
  conversionGreaterThan,
} from './conversion-util';

export function increaseLastGasPrice(lastGasPrice) {
  return addHexPrefix(
    multiplyCurrencies(lastGasPrice || '0x0', 10, {
      multiplicandBase: 16,
      multiplierBase: 10,
      toNumericBase: 'hex',
    }),
  );
}

export function hexGreaterThan(a, b) {
  return conversionGreaterThan(
    { value: a, fromNumericBase: 'hex' },
    { value: b, fromNumericBase: 'hex' },
  );
}

export function getHexGasTotal({ gasLimit, gasPrice }) {
  return addHexPrefix(
    multiplyCurrencies(gasLimit || '0x0', gasPrice || '0x0', {
      toNumericBase: 'hex',
      multiplicandBase: 16,
      multiplierBase: 16,
    }),
  );
}

export function addEth(...args) {
  return args.reduce((acc, ethAmount) => {
    return addCurrencies(acc, ethAmount, {
      toNumericBase: 'dec',
      numberOfDecimals: 6,
      aBase: 10,
      bBase: 10,
    });
  });
}

export function addFiat(...args) {
  return args.reduce((acc, fiatAmount) => {
    return addCurrencies(acc, fiatAmount, {
      toNumericBase: 'dec',
      numberOfDecimals: 2,
      aBase: 10,
      bBase: 10,
    });
  });
}

export function getValueFromWeiHex({
  value,
  fromCurrency = 'STC',
  toCurrency,
  conversionRate,
  numberOfDecimals,
  toDenomination,
}) {
  return conversionUtil(value, {
    fromNumericBase: 'hex',
    toNumericBase: 'dec',
    fromCurrency,
    toCurrency,
    numberOfDecimals,
    fromDenomination: 'NANOSTC',
    toDenomination,
    conversionRate,
  });
}

export function getTransactionFee({
  value,
  fromCurrency = 'STC',
  toCurrency,
  conversionRate,
  numberOfDecimals,
}) {
  return conversionUtil(value, {
    fromNumericBase: 'BN',
    toNumericBase: 'dec',
    fromDenomination: 'NANOSTC',
    fromCurrency,
    toCurrency,
    numberOfDecimals,
    conversionRate,
  });
}

export function formatCurrency(value, currencyCode) {
  const upperCaseCurrencyCode = currencyCode.toUpperCase();

  return currencies.find((currency) => currency.code === upperCaseCurrencyCode)
    ? currencyFormatter.format(Number(value), {
      code: upperCaseCurrencyCode,
      style: 'currency',
    })
    : value;
}

export function stringifyBalance(balance, decimals, currency, numberOfDecimals) {
  const multiplier = Math.pow(10, Number(decimals || 0));
  let value = conversionUtil(balance, {
    // fromCurrency,
    toCurrency: currency,
    fromNumericBase: 'hex',
    toNumericBase: 'dec',
    numberOfDecimals,
    conversionRate: multiplier,
    invertConversionRate: true,
  });
  // avoid disply 0 while hideZeroBalanceTokens = true
  if (Number(value) === 0 && balance !== '0x0') {
    value = conversionUtil(balance, {
      // fromCurrency,
      toCurrency: currency,
      fromNumericBase: 'hex',
      toNumericBase: 'dec',
      decimals,
      conversionRate: multiplier,
      invertConversionRate: true,
    });
  }
  return formatCurrency(value, currency);
}

export function convertTokenToFiat({
  value,
  fromCurrency = 'STC',
  toCurrency,
  conversionRate,
  contractExchangeRate,
}) {
  const totalExchangeRate = conversionRate * contractExchangeRate;

  return conversionUtil(value, {
    fromNumericBase: 'dec',
    toNumericBase: 'dec',
    fromCurrency,
    toCurrency,
    numberOfDecimals: 2,
    conversionRate: totalExchangeRate,
  });
}

export function hasUnconfirmedTransactions(state) {
  return unconfirmedTransactionsCountSelector(state) > 0;
}

/**
 * Rounds the given decimal string to 4 significant digits.
 *
 * @param {string} decimalString - The base-ten number to round.
 * @returns {string} The rounded number, or the original number if no
 * rounding was necessary.
 */
export function roundExponential(decimalString) {
  const PRECISION = 4;
  const bigNumberValue = new BigNumber(decimalString);

  // In JS, numbers with exponentials greater than 20 get displayed as an exponential.
  return bigNumberValue.e > 20
    ? bigNumberValue.toPrecision(PRECISION)
    : decimalString;
}
