import React from 'react';
import { Form, Input, Button, Space } from 'antd';
import { MinusCircleOutlined } from '@ant-design/icons';

const EventsPanelWeekday = () => {

    const onFinish = values => {
        console.log('Received values of form:', values);
    };


    return (
        <Form name="dynamic_form_nest_item" onFinish={onFinish} autoComplete="off" onSubmit={(e) => console.log()}>
            <Form.List name="users">
                {(fields, { add, remove }) => (
                    <>
                        {fields.map(({ key, name, fieldKey, ...restField }) => (
                            <Space key={key} style={{ display: 'flex', marginBottom: 2 }} align="baseline">
                                <Form.Item
                                    {...restField}
                                    name={[name, 'first']}
                                    fieldKey={[fieldKey, 'first']}
                                    rules={[{ required: true, message: 'Missing first name' }]}
                                >
                                    <Input placeholder="First Name" />
                                </Form.Item>
                                <Form.Item
                                    {...restField}
                                    name={[name, 'last']}
                                    fieldKey={[fieldKey, 'last']}
                                    rules={[{ required: true, message: 'Missing last name' }]}
                                >
                                    <Input placeholder="Last Name" />
                                </Form.Item>
                                <MinusCircleOutlined onClick={() => remove(name)} />
                            </Space>
                        ))}
                        <Form.Item>
                            <Button onClick={() => add()} block style={{width: "400px", color: "#d9d9d9"}}>
                                Legg til ukedag i beskrivelsen
                            </Button>
                        </Form.Item>
                    </>
                )}
            </Form.List>
            <Form.Item>
                <Button type="primary" htmlType="submit">
                    Submit
                </Button>
            </Form.Item>
        </Form>
    );
};

export default EventsPanelWeekday;