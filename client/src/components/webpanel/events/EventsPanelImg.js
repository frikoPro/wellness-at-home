import {Form} from "react-bootstrap";
import React from "react";
import { message } from 'antd';
import { InboxOutlined } from '@ant-design/icons';
import Dragger from "antd/es/upload/Dragger";
import UseForm from "../UseForm";

const EventsPanelImg = () => {

    const { handleImages } = UseForm({initialValues: {}, url: "http://localhost:8080/events"})

    const props = {
        name: 'eventImg',
        maxCount: 1,
        onPreview(file) {
            console.log(file)
        },
        beforeUpload: file => {
            console.log(file);
            handleImages(file)
            return false;
        },
        onChange(info) { // Not needed tbh but good for debugging
            const { status } = info.file;
            if (status !== 'uploading') {
                console.log(info.file, info.fileList);
            }
            if (status === 'done') {
                message.success(`${info.file.name} file uploaded successfully.`);
            } else if (status === 'error') {
                message.error(`${info.file.name} file upload failed.`);
            }
        },
    };

    return(
        <>
            <Form.Group>
                <Dragger {...props}>
                    <p className="ant-upload-drag-icon"><InboxOutlined /></p>
                    <p className="ant-upload-text">Klikk og dra bildet inn her</p>
                    <p className="ant-upload-hint">Kun ett bilde.</p>
                </Dragger>
            </Form.Group>
        </>
    );
};

export default EventsPanelImg;