import React, { useState } from 'react'
import { BigNumber } from "ethers";
import { Button, Col, Form, Row } from 'react-bootstrap';

const AddWithdrawTL = ({contract, setError, address, getBalance}) => {
    const [input, setInput] = useState({});

    const addTL = async () => {
        try {
            let tl = input.addTL;
            if(!tl){
                setError("Please fill the TL field.");
                return;
            }
            let _tl = BigNumber.from(tl);
            await contract.methods.depositTL(_tl).send({
                from: address
            });
            await getBalance();
        } catch (err) {
            setError(err.message);
            console.log(err);
        }
        
    }

    const withdrawTL = async () => {
        try {
            let tl = input.withdrawTL;
            if(!tl){
                setError("Please fill the TL field.");
                return;
            }
            let _tl = BigNumber.from(tl);
            await contract.methods.withdrawTL(_tl).send({
                from: address
            });
            await getBalance();
        } catch (err) {
            setError(err.message);
            console.log(err);
        }
    }
    
    return (
        <Form>
            <Row>
                <Col>
                    <Row>
                        <h3>Deposit TL</h3>
                        <Form.Label>Amount</Form.Label>
                        <Col>
                            <Form.Control type="number" placeholder="123" onChange={(e) => setInput({...input, addTL: e.target.value})}/>
                        </Col>
                        <Col>
                            <Button variant={'secondary'} size="xs" onClick={() => addTL()} >Deposit TL</Button>
                        </Col>
                    </Row>
                </Col>
                <Col>
                    <Row>
                        <h3>Withdraw TL</h3>
                        <Form.Label>Amount</Form.Label>
                        <Col>
                            <Form.Control type="number" placeholder="123" onChange={(e) => setInput({...input, withdrawTL: e.target.value})}/>
                        </Col>
                        <Col>
                            <Button variant={'secondary'} size="xs" onClick={() => withdrawTL()} >Withdraw TL</Button>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Form>
    )
}

export default AddWithdrawTL