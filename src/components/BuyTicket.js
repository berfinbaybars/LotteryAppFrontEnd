import React, { useState } from 'react'
import { Button, Col, Form, Row } from 'react-bootstrap';

const BuyTicket = ({contract, setError, address, getBalance}) => {
    const [input, setInput] = useState();

    const buyTicket = async () => {
        try {
            let randomNumber = input;
            if(!randomNumber){
                setError("Please fill the Random Number field.");
                return;
            }
            await contract.methods.attemptBuying(randomNumber).send({from: address});
            await getBalance();
        } catch (err) {
            setError(err.message);
            console.log(err);
        }
    }

    return (
        <Form>
            <h3>Buy Ticket</h3>
            <Row>
            <Form.Label>Random Number</Form.Label>
                <Col>
                    <Form.Control type="number" placeholder="123" onChange={(e) => setInput(e.target.value)}/>
                </Col>
                <Col>
                    <Button variant={'secondary'} size="xs" onClick={() => buyTicket()} >Send</Button>
                </Col>
            </Row>
        </Form>
    )
}

export default BuyTicket