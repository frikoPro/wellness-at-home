import SupplierCard from './SupplierCard';
import styled from 'styled-components';
import { useContext } from 'react';
import { ScrollContext } from '../../contexts/ScrollContext';

const SupplierCardList = () => {
	const { homepageEl } = useContext(ScrollContext);

	const [homePageEl] = homepageEl;

	const supplierList = [
		{
			name: 'Nordpool',
			image: 'nordpoolCardImg.png',
			logo: 'nordpoolLogo.png',
			text:
				'NordPool badene gir deg den perfekte spaopplevelse for kropp, sjel og lommebok NÅ også klargjort for Saltvannsrensing og WIFI app styring!',
		},
		{
			name: 'Svenska Bad',
			image: 'svenskaBadImg.png',
			logo: 'svenskaBadLogo.png',
			text:
				'Svenska Bad er utviklet for å klare det nordiske klimaets mest ekstreme utfordringer. Vi benytter de mest hardføre materialer, den mest effektive isolering og den siste teknologien for rengjøring.',
		},
		{
			name: 'Svenska Pro',
			image: 'Gavel_Mot_Oslo.jpg',
			logo: 'SvenskaProLogo.png',
			text:
				'Med vår Pro Serie har vi tatt SPABAD TIL ET NYTT NIVÅ. Et nivå fullt av muligheter som betyr at du kan designe ditt personlige spabad og lage ditt eget unike bademiljø.',
		},
	];

	return (
		<section>
			{supplierList.map((card, index) => (
				<StyledArticle
					key={index}
					right={index % 2 === 0 ? true : false}
					ref={homePageEl[index+1].ref}
					animate={homePageEl[index+1].show}
					animatePercent={homePageEl[index+1].percent}>
					<SupplierCard {...card} />
				</StyledArticle>
			))}
		</section>
	);
};

const StyledArticle = styled.article`
	transform: translateX(
		${({ animate, right }) => (animate ? '0' : right ? '100vw' : '-100vw')}
	);
	transition: transform 2s;
	opacity: ${({ animatePercent }) =>
		animatePercent ? `${animatePercent / 100}` : `1`};
`;

export default SupplierCardList;
