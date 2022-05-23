import abi from './abi';

const address = "0x8D3391f51d9B22C3E81F8fA9330982521Ed837cb"

export const getContract = (_web3) => {
    let _contract = new _web3.eth.Contract(abi, address);
    return _contract;
}
