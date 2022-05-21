import React, { Fragment, useEffect } from 'react'
import Web3 from 'web3'

const Landing = () => {
    let web3;
    const connectWallet = () => {
        if(typeof window !== "undefined" && window.ethereum !== "undefined"){
            window.ethereum.request({method: "eth_requestAccounts"});
            //web3 = new Web3(window.ethereum);

        }
        else {
            console.log("Please install MetaMask.");
        }
    }
    useEffect(() => {
        connectWallet();
    })

    return (
        <Fragment>

        </Fragment>
    )
}

export default Landing