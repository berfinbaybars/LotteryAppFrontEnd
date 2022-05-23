import React, { useState } from 'react'
import { Button, Col, Form, Row } from 'react-bootstrap';

const TotalLotteryMoney = ({contract, setError, address}) => {
    const [input, setInput] = useState();
    const [money, setMoney] = useState(null);
    
    const getTotalLotteryMoneyCollected = async () => {
        let _lotteryNo = input;
        if(!_lotteryNo){
            setError("Please fill the Lottery No field.")
            return;
        }
        try {
            const totalMoney = await contract.methods.getTotalLotteryMoneyCollected(_lotteryNo).call({from: address});
            console.log(totalMoney)
            setMoney(totalMoney);
        } catch (err) {
            setError("Lottery does not exist.");
            console.log(err);
        }
    }

    return (
        <Form>
            <h3>Total Lottery Money</h3>
            <Row>
            <Form.Label>Lottery No</Form.Label>
                <Col>
                    <Form.Control type="number" placeholder="123" onChange={(e) => setInput(e.target.value)}/>
                </Col>
                <Col>
                    <Button variant={'secondary'} size="xs" onClick={() => getTotalLotteryMoneyCollected()} >Send</Button>
                </Col>
            </Row>
            
            {
                money && <p>Total money collected: {money}</p>
            }
        </Form>
    )
}

export default TotalLotteryMoney