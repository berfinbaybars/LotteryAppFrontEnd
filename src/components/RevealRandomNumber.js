import React, { useState } from 'react'
import { Button, Col, Form, Row } from 'react-bootstrap';

const RevealRandomNumber = ({ contract, setError, address }) => {
    const [input, setInput] = useState({});

    const revealRandomNumber = async () => {
        let ticketNo = input.ticketNo;
        let randomNumber = input.randomNumber;
        console.log(randomNumber, ticketNo);
        if(ticketNo === "" || randomNumber === ""){
            setError("Please fill the Random Number and Ticket No fields.")
            return;
        }
        try {
            await contract.methods.revealRndNumber(ticketNo, randomNumber).send({from: address});
        } catch (err) {
            setError(err.message);
            console.log(err);
        }
    }

    return (
        <Form>
            <h3>Reveal Random Number</h3>
            <Row>
                <Row>
                    <Col xs={4}>
                        <Form.Label>Random Number</Form.Label>
                    </Col>
                    <Col xs={4}>
                        <Form.Label>Ticket No</Form.Label>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Form.Control type="number" placeholder="123" onChange={(e) => setInput({...input, randomNumber: e.target.value})}/>
                    </Col>
                    <Col>
                        <Form.Control type="number" placeholder="42" onChange={(e) => setInput({...input, ticketNo: e.target.value})}/>
                    </Col>
                    <Col>
                        <Button variant={'secondary'} size="xs" onClick={() => revealRandomNumber()} >Reveal</Button>
                    </Col>
                </Row>
            </Row>
        </Form>
    )
}

export default RevealRandomNumber