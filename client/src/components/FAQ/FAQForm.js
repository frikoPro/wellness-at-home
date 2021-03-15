import { Form } from 'react-bootstrap';

const FAQForm = ({ handleChange, values, errors }) => {
	return (
		<Form>
			<Form.Group>
				<Form.Label>Spørsmål</Form.Label>
				<Form.Control
					placeholder="hvordan..."
					onChange={handleChange}
					name="question"
					value={values.question}
				/>
				<Form.Text className="text-danger">{errors('question')}</Form.Text>
			</Form.Group>
			<Form.Group>
				<Form.Label>Svar</Form.Label>
				<Form.Control
					placeholder="svar"
					name="answer"
					onChange={handleChange}
					value={values.answer}
				/>
				<Form.Text className="text-danger">{errors('answer')}</Form.Text>
			</Form.Group>
		</Form>
	);
};

export default FAQForm;
