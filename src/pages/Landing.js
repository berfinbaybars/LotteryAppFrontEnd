import React, {  Fragment, useState } from 'react'
import Web3 from 'web3'
import { getContract } from '../utils/contract';
import { Alert,  Container, Button} from 'react-bootstrap';

import TotalLotteryMoney from '../components/TotalLotteryMoney';
import AddWithdrawTL from '../components/AddWithdrawTL';
import BuyTicket from '../components/BuyTicket';
import RevealRandomNumber from '../components/RevealRandomNumber';
import LastOwnedTicket from '../components/LastOwnedTicket';
import GetIthOwnedTicket from '../components/GetIthOwnedTicket';
import TicketRefund from '../components/TicketRefund';
import CollectTicketPrize from '../components/CollectTicketPrize';
import CheckIfTicketWon from '../components/CheckIfTicketWon';
import GetIthWinningTicket from '../components/GetIthWinningTicket';

const Landing = () => {
    const [web3, setWeb3] = useState(null);
    const [address, setAddress] = useState(null);
    const [balance, setBalance] = useState('');
    const [contract, setContract] = useState(null);
    const [lotteryNo, setLotteryNo] = useState(null);
    const [period, setPeriod] = useState(null);
    const [error, setError] = useState(null);
    const [connected, setConnected] = useState(false);

    const connectWallet = async () => {
        if(typeof window !== "undefined" && window.ethereum !== "undefined"){
            try {
                window.ethereum.request({method: "eth_requestAccounts"});
                let newWeb3 = new Web3(window.ethereum)
                setWeb3(newWeb3);
                setContract(await getContract(newWeb3));
                let _accounts = await newWeb3.eth.getAccounts()
                setAddress(_accounts[0]);
                setConnected(true);
            } catch (err) {
                setError(err.message);
                console.log(err);
            }
        }
        else {
            console.log("Please install MetaMask.");
        }
    }
    
    const getBalance = async () => {
        try {
            const balance = await contract.methods.tlBalance(address).call({from: address});
            setBalance(balance);
        } catch (err) {
            setError(err.message);
            console.log(err)
        }
    }

    const getLotteryInfo = async () => {
        try {
            let timeSinceStart = await contract.methods.timeSinceStart().call({from: address});
            let _lotteryNo = await contract.methods.getLotteryNo(timeSinceStart).call({from: address});
            let step = await contract.methods.getCurrentStep().call({from: address});
            console.log(step)
            setPeriod(step.toString());
            setLotteryNo(_lotteryNo);
        } catch (err) {
            setError(err.message);
            console.log(err);
        }
    }

    return (
        <Container>
            <br />
            {
                !connected && <Fragment>
                    <Button onClick={() => connectWallet()}>Connect</Button>
                    <h2>Connect to Metamask to see</h2>
                </Fragment> 
            }
            {
                connected && <Fragment>
                    <Button onClick={() => getBalance()}>Balance</Button>
                    <Button onClick={() => getLotteryInfo()}>Get Lottery Info</Button>
                    {
                        address && <h1>Address: {address}</h1> 
                    }
                    {
                        balance && <h2> Balance: {balance}</h2>
                    }
                    
                    <br />
                    {
                        lotteryNo && <h3>Lottery No: {lotteryNo}</h3>
                    }
                    {
                        period && (period === "1" ? <h3>Purchase Period</h3> : <h3>Reveal Period</h3>) 
                    }
                    {
                        error && <Alert variant={'danger'}>{error}</Alert>
                    }
                    <br />
                    <br />
                    <AddWithdrawTL contract={contract} setError={setError} address={address} getBalance={getBalance} />
                    <br />
                    <TotalLotteryMoney contract={contract} setError={setError} address={address} />
                    <br />
                    <BuyTicket contract={contract} setError={setError} address={address} getBalance={getBalance} />
                    <br />
                    <RevealRandomNumber contract={contract} setError={setError} address={address} />
                    <br />
                    <LastOwnedTicket contract={contract} setError={setError} address={address} />
                    <br />
                    <GetIthOwnedTicket contract={contract} setError={setError} address={address} />
                    <br />
                    <TicketRefund contract={contract} setError={setError} address={address} getBalance={getBalance} />
                    <br />
                    <CollectTicketPrize contract={contract} setError={setError} address={address} getBalance={getBalance} />
                    <br />
                    <CheckIfTicketWon contract={contract} setError={setError} address={address} />
                    <br />
                    <GetIthWinningTicket contract={contract} setError={setError} address={address} />
                    <br />
                    <br />
                </Fragment>
            }
            
        </Container>
    )
}

export default Landing