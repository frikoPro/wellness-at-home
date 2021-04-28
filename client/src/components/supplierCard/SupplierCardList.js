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
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
		},
		{
			name: 'Svenska Bad',
			image: 'svenskaBadImg.png',
			logo: 'svenskaBadLogo.png',
			text:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
		},
		{
			name: 'Svenska Pro',
			image: 'Gavel_Mot_Oslo.jpg',
			logo: 'SvenskaProLogo.png',
			text:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
		},
	];

	return (
		<section>
			{supplierList.map((card, index) => (
				<StyledArticle
					key={index}
					right={index % 2 === 0 ? true : false}
					ref={homePageEl[index + 2].ref}
					animate={homePageEl[index + 2].show}
					animatePercent={homePageEl[index + 2].percent}>
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
