import Web3 from 'web3';

export function getLibrary(provider: any) {
  return new Web3(provider);
}
