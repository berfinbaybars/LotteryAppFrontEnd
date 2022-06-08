import React, { useState } from 'react'
import { Button, Col, Form, Row } from 'react-bootstrap';

const CheckIfTicketWon = ({ contract, setError, address }) => {
    const [input, setInput] = useState({});
    const [prize, setPrize] = useState(null);
    
    const checkIfTicketWon = async () => {
        let _lotteryNo = input.lotteryNo;
        let ticketNo = input.ticketNo;
        if(!ticketNo || !_lotteryNo){
            setError("Please fill the Lottery No and Ticket No fields.")
            return;
        }
        try {
            const _prize = await contract.methods.checkIfTicketWon(ticketNo, _lotteryNo).call({from: address});
            console.log(_prize)
            setPrize(_prize);
        } catch (err) {
            setError(err.message);
            console.log(err);
        }
    }

    return (
        <Form>
            <h3>Check If Ticket Won</h3>
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
                        <Button variant={'secondary'} size="xs" onClick={() => checkIfTicketWon()} >Send</Button>
                    </Col>
                </Row>
            </Row>
            <Row>
                {
                    prize && <p>Prize: {prize}</p>
                }
            </Row>
        </Form>
    )
}

export default CheckIfTicketWon