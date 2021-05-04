import { Form } from 'react-bootstrap';
import React from 'react';
import { message } from 'antd';
import { InboxOutlined } from '@ant-design/icons';
import Dragger from 'antd/es/upload/Dragger';

const EventsPanelImg = (props) => {
	const handleImage = {
		name: 'files',
		maxCount: 1,
		accept: `.png, .jpg, .jpeg`,
		onPreview(file) {
			console.log(file);
		},
		beforeUpload: (file) => {
			props.onChange(file);
			return false;
		},
		onChange(info) {
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

	return (
		<>
			<Form.Group className={`w-50`}>
				<Dragger {...handleImage}>
					<p className="ant-upload-drag-icon">
						<InboxOutlined />
					</p>
					<p className="ant-upload-text">Klikk og dra bildet inn her</p>
					<p className="ant-upload-hint">Kun ett .png, .jpg, eller .jpeg bilde.</p>
					<p className="ant-upload-hint">1200x500</p>
				</Dragger>
			</Form.Group>
		</>
	);
};

export default EventsPanelImg;
