import { useEffect } from 'react';

import { useWeb3React } from '@web3-react/core';
import Web3 from 'web3';

import { injectedConnector } from '~/configs/web3';

export const useWeb3 = () => {
  const { active, account, library, connector, activate, deactivate, chainId } =
    useWeb3React<Web3>();

  async function connectWallet() {
    try {
      await activate(injectedConnector);
    } catch (err) {
      console.log(err);
    }
  }

  async function disconnectWallet() {
    try {
      deactivate();
    } catch (err) {
      console.log(err);
    }
  }

  /* useEffect(() => {
    if (account) {
      library?.eth.personal
        .sign(
          'This transaction is just to validate that you are the true owner of the wallet and does not represent a real transaction on the blockchain.',
          account,
          ''
        )
        .then((result) => console.log('assinatura', account, result));
    }
  }, [active]); */

  return {
    connectWallet,
    disconnectWallet,
    active,
    account,
    library,
    connector,
    chainId,
  };
};
