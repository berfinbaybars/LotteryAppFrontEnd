import React, { useState } from 'react'
import { Button, Col, Form, Row } from 'react-bootstrap';

const GetIthWinningTicket = ({ contract, setError, address }) => {
    const [input, setInput] = useState({});
    const [ticketNo, setTicketNo] = useState(null);
    const [prize, setPrize] = useState(null);

    const getIthWinningTicket = async () => {
        let _lotteryNo = input.lotteryNo;
        let i = input.i;
        if(!i || !_lotteryNo){
            setError("Please fill the Lottery No and Number of Ticket fields.")
            return;
        }
        try {
            const ticket = await contract.methods.getIthWinningTicket(i, _lotteryNo).call({from: address});
            setTicketNo(ticket[0]);
            setPrize(ticket[1]); 
        } catch (err) {
            setError(err.message);
            console.log(err);
        }
    }
    return (
        <Form>
            <h3>Get Ith Winning Ticket</h3>
            <Row>
                <Row>
                    <Col xs={4}>
                        <Form.Label>Lottery No</Form.Label>
                    </Col>
                    <Col xs={4}>
                        <Form.Label>Number (i)</Form.Label>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Form.Control type="number" placeholder="123" onChange={(e) => setInput({...input, lotteryNo: e.target.value})}/>
                    </Col>
                    <Col>
                        <Form.Control type="number" placeholder="2" onChange={(e) => setInput({...input, i: e.target.value})}/>
                    </Col>
                    <Col>
                        <Button variant={'secondary'} size="xs" onClick={() => getIthWinningTicket()} >Send</Button>
                    </Col>
                </Row>
            </Row>
            <Row>
                {
                    ticketNo && <p>Ticket No: {ticketNo}</p>
                }
                {
                    prize && <p>Prize: {prize} TL</p>
                }
            </Row>
        </Form>
    )
}

export default GetIthWinningTicket