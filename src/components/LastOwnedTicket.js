import React, { useState } from 'react'
import { Button, Col, Form, Row } from 'react-bootstrap';

const LastOwnedTicket = ({ contract, setError, address }) => {
    const [input, setInput] = useState();
    const [ticketNo, setTicketNo] = useState(null);
    const [ticketStatus, setStatus] = useState(null);
    
    const getLastOwnedTicketNo = async () => {
        let _lotteryNo = input;
        if(!_lotteryNo){
            setError("Please fill the Lottery No field.")
            return;
        }
        try {
            const ticket = await contract.methods.getLastOwnedTicketNo(_lotteryNo).call({from: address});
            console.log(ticket)
            setTicketNo(ticket[0]);
            switch (ticket["status"]) {
                case "0":
                    setStatus("Not Revealed")
                    break;
                case "1":
                    setStatus("Revealed, Not Redeemed")
                    break;
                case "2":
                    setStatus("Revealed and Redeemed.")
                    break;
                default:
                    break;
            }
        } catch (err) {
            setError(err.message);
            console.log(err);
        }
    }
    
    return (
        <Form>
            <h3>Last Owned Ticket No</h3>
            <Row>
                <Form.Label>Lottery No</Form.Label>
                <Col>
                    <Form.Control type="number" placeholder="123" onChange={(e) => setInput(e.target.value)}/>
                </Col>
                <Col>
                    <Button variant={'secondary'} size="xs" onClick={() => getLastOwnedTicketNo()} >Send</Button>
                </Col>
            </Row>
            <Row>
                {
                    ticketNo && <p>Ticket No: {ticketNo} </p>
                }
                {
                    ticketStatus && <p>Status: {ticketStatus}</p>
                }
            </Row>
            
        </Form>
    )
}

export default LastOwnedTicket