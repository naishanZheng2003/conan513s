export const APPROVAL_TYPE = 'wallet_requestPermissions';

export const WALLET_PREFIX = 'wallet_';

export const HISTORY_STORE_KEY = 'permissionsHistory';

export const LOG_STORE_KEY = 'permissionsLog';

export const METADATA_STORE_KEY = 'domainMetadata';

export const METADATA_CACHE_MAX_SIZE = 100;

export const CAVEAT_TYPES = {
  limitResponseLength: 'limitResponseLength',
  filterResponse: 'filterResponse',
};

export const NOTIFICATION_NAMES = {
  accountsChanged: 'starmask_accountsChanged',
  unlockStateChanged: 'starmask_unlockStateChanged',
  chainChanged: 'starmask_chainChanged',
};

export const LOG_IGNORE_METHODS = [
  'wallet_registerOnboarding',
  'wallet_watchAsset',
];

export const LOG_METHOD_TYPES = {
  restricted: 'restricted',
  internal: 'internal',
};

export const LOG_LIMIT = 100;

export const SAFE_METHODS = [
  'chain.id',
  'chain.info',
  'chain.get_block_by_number',
  'chain.get_transaction_info',
  'contract.call',
  'contract.call_v2',
  'contract.dry_run',
  'contract.dry_run_raw',
  'contract.get_code',
  'contract.get_resource',
  'contract.resolve_module',
  'contract.resolve_function',
  'contract.resolve_struct',
  'txpool.gas_price',
  'txpool.submit_hex_transaction',
  'eth_blockNumber',
  'eth_call',
  'eth_chainId',
  'eth_coinbase',
  'eth_estimateGas',
  'eth_gasPrice',
  'eth_getBalance',
  'eth_getBlockByHash',
  'eth_getBlockByNumber',
  'eth_getBlockTransactionCountByHash',
  'eth_getBlockTransactionCountByNumber',
  'eth_getCode',
  'eth_getFilterChanges',
  'eth_getFilterLogs',
  'eth_getLogs',
  'eth_getProof',
  'eth_getStorageAt',
  'eth_getTransactionByBlockHashAndIndex',
  'eth_getTransactionByBlockNumberAndIndex',
  'eth_getTransactionByHash',
  'eth_getTransactionCount',
  'eth_getTransactionReceipt',
  'eth_getUncleByBlockHashAndIndex',
  'eth_getUncleByBlockNumberAndIndex',
  'eth_getUncleCountByBlockHash',
  'eth_getUncleCountByBlockNumber',
  'eth_getWork',
  'eth_hashrate',
  'eth_mining',
  'eth_newBlockFilter',
  'eth_newFilter',
  'eth_newPendingTransactionFilter',
  'eth_protocolVersion',
  'eth_sendRawTransaction',
  'eth_sign',
  'eth_signTypedData',
  'eth_signTypedData_v1',
  'eth_signTypedData_v3',
  'eth_signTypedData_v4',
  'eth_submitHashrate',
  'eth_submitWork',
  'eth_syncing',
  'eth_uninstallFilter',
  'metamask_watchAsset',
  'net_listening',
  'net_peerCount',
  'net_version',
  'personal_ecRecover',
  'personal_sign',
  'state.get_resource',
  'state.get_code',
  'state.get_account_state_set',
  'state.list_resource',
  'state.list_code',
  'starmask_getProviderState',
  'stc_decrypt',
  'stc_getEncryptionPublicKey',
  'stc_sendTransaction',
  'wallet_watchAsset',
  'web3_clientVersion',
  'web3_sha3',
];
