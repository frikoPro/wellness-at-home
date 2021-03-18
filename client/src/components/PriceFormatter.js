const PriceFormatter = (price) => {
	return new Intl.NumberFormat('en-GB', {
		style: 'currency',
		currency: 'NOK',
	}).format(price);
};

export default PriceFormatter;
