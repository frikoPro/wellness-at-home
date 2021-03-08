import { useContext } from 'react';
import { FAQContext } from '../../../contexts/FAQContext';
import FAQList from '../../FAQ/FAQList';

const FAQ = () => {
	const FAQs = useContext(FAQContext);

	return <FAQList FAQs={FAQs} />;
};

export default FAQ;
