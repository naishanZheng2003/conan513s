import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import {
  getIsMainnet,
  getTokenExchangeRates,
  getPreferences,
} from '../../../selectors';
import TokenInput from './token-input.component';

const mapStateToProps = (state) => {
  const {
    starmask: { currentCurrency },
  } = state;
  const { showFiatInTestnets } = getPreferences(state);
  const isMainnet = getIsMainnet(state);

  return {
    currentCurrency,
    tokenExchangeRates: getTokenExchangeRates(state),
    // hideConversion: !isMainnet && !showFiatInTestnets,
    hideConversion: true,
  };
};

const TokenInputContainer = connect(mapStateToProps)(TokenInput);

TokenInputContainer.propTypes = {
  token: PropTypes.shape({
    code: PropTypes.string.isRequired,
    decimals: PropTypes.number,
    symbol: PropTypes.string,
  }).isRequired,
};

export default TokenInputContainer;
