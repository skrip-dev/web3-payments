import React, { useEffect } from 'react';

import { Box, Button, Text } from '@chakra-ui/react';
import { useWeb3React } from '@web3-react/core';
import { InjectedConnector } from '@web3-react/injected-connector';
import type { NextPage } from 'next';
import Web3 from 'web3';

const injected = new InjectedConnector({
  supportedChainIds: [1, 3, 4, 5, 42, 56],
});

const PageComponent: NextPage = () => {
  const { active, account, library, connector, activate, deactivate, chainId } =
    useWeb3React<Web3>();

  async function connect() {
    try {
      await activate(injected);
      localStorage.setItem('isWalletConnected', 'true');
    } catch (ex) {
      console.log(ex);
    }
  }

  async function disconnect() {
    try {
      deactivate();
      localStorage.setItem('isWalletConnected', 'false');
    } catch (ex) {
      console.log(ex);
    }
  }

  useEffect(() => {
    const connectWalletOnPageLoad = async () => {
      if (localStorage?.getItem('isWalletConnected') === 'true') {
        try {
          await activate(injected);
          localStorage.setItem('isWalletConnected', 'true');
        } catch (ex) {
          console.log(ex);
        }
      }
    };

    //connectWalletOnPageLoad()
  }, []);

  /*   useEffect(() => {

  (async () => {
    console.log(await library?.eth.getBalance(account))
  })()
},[]) */

  return (
    <Box>
      <Text>Hello Web 3</Text>

      <div>
        <br />

        {active && (
          <>
            <span>
              chainId <b>{chainId}</b>
            </span>{' '}
            <br />
            <span>
              Connected with <b>{account}</b>
            </span>
            <br />
            <br />
            <br />
            <Button onClick={disconnect}>Disconnect</Button>
          </>
        )}

        {!active && (
          <>
            <span>Not connected</span>

            <br />
            <br />
            <br />

            <Button onClick={connect}>Connect to MetaMask</Button>
          </>
        )}
      </div>
    </Box>
  );
};

export default PageComponent;
