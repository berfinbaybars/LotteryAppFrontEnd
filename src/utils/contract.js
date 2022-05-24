import abi from './abi';

//const address = "0xee7ab78f04d7Fb71DEd1AE70A385cC7375ad3e6e"; // 7 days
const address = "0x552cEE2d3DEd02960E59069aDcAA939fdF96D9F4"; // 4 minutes (for testing)

export const getContract = (_web3) => {
    let _contract = new _web3.eth.Contract(abi, address);
    return _contract;
}
