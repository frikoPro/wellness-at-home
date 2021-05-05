import React, {useState} from 'react';
import {Button, Card, Form} from "react-bootstrap";
import TextArea from "antd/es/input/TextArea";
import {Col, Input, Row} from "antd";

const PrivacyPanel = () => {
    const [number, setNumber] = useState();
    const [title, setTitle] = useState();
    const [text, setText] = useState();

    const mockData =  {
        articleNumber: number,
        articleTitle: title,
        articleText: text
    }

    const onNumberChange = e => {
        console.log('Nummer:', e.target.value);
        setNumber(e.target.value);
    };
    const onTitleChange = e => {
        console.log('Tittel:', e.target.value);
        setTitle(e.target.value);
    };
    const onTextChange = e => {
        console.log('Tekst:', e.target.value);
        setText(e.target.value);
    };

    return (
        <>
            <Card>
                <Card.Body>
                    <Card.Title>Personvern</Card.Title>
                    <hr/>
                    <Form>
                        <Row>
                            <Col span={2}>
                                <Input
                                    placeholder="Nummer"
                                    onChange={onNumberChange}
                                />
                            </Col>
                            <Col span={7}>
                                <Input
                                    placeholder="Tittel"
                                    onChange={onTitleChange}
                                />
                            </Col>
                        </Row>
                        <br/>
                        <Col>
                            <TextArea
                                rows={4}
                                showCount
                                placeholder="Tekst"
                                onChange={onTextChange}
                            />
                        </Col>

                    </Form>
                </Card.Body>
                <Card.Footer>
                    <Row>
                        <Col sm={2}>
                            <Button onClick={() => console.log(mockData)}>Lagre innlegg</Button>
                        </Col>
                        <Col>
                            <Button onClick={() => {}}>Forhåndvisning</Button>
                        </Col>
                    </Row>
                </Card.Footer>
            </Card>
        </>
    );
};

export default PrivacyPanel;

