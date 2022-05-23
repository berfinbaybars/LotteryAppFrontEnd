import React, { useState } from 'react'
import { Button, Col, Form, Row } from 'react-bootstrap';

const TicketRefund = ({ contract, setError, address, getBalance }) => {
    const [input, setInput] = useState({});

    const collectTicketRefund = async () => {
        let _lotteryNo = input.lotteryNo;
        let ticketNo = input.ticketNo;
        if(!ticketNo || !_lotteryNo){
            setError("Please fill the Lottery No and Ticket No fields.")
            return;
        }
        try {
            await contract.methods.collectTicketRefund(ticketNo, _lotteryNo).send({from: address});
            await getBalance();
        } catch (err) {
            setError(err.message);
            console.log(err);
        }
    }
    return (
        <Form>
            <h3>Get Ticket Refund</h3>
            <Row>
                <Row>
                    <Col xs={4}>
                        <Form.Label>Lottery No</Form.Label>
                    </Col>
                    <Col xs={4}>
                        <Form.Label>Ticket No</Form.Label>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Form.Control type="number" placeholder="123" onChange={(e) => setInput({...input, lotteryNo: e.target.value})}/>
                    </Col>
                    <Col>
                        <Form.Control type="number" placeholder="2" onChange={(e) => setInput({...input, ticketNo: e.target.value})}/>
                    </Col>
                    <Col>
                        <Button variant={'secondary'} size="xs" onClick={() => collectTicketRefund()} >Send</Button>
                    </Col>
                </Row>
            </Row>
        </Form>
    )
}

export default TicketRefund