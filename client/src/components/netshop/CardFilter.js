import { useContext, useState, useEffect } from 'react';
import { Card, Form } from 'react-bootstrap';

import { JacuzziContext } from '../../contexts/JacuzziContext';
import { ProductsContext } from '../../contexts/ProductsContext';

const CardFilter = ({ setFilter }) => {
	const { brands } = useContext(JacuzziContext);

	const { categories, products } = useContext(ProductsContext);

	const [filterCategories, setCategories] = useState([]);

	const [filterBrands, setBrands] = useState([]);

	useEffect(() => {
		const checkBrands = (brands) => {
			let match = false;

			brands.forEach((item) => {
				if (filterBrands.includes(item.serie)) return (match = true);
			});

			console.log(match);
			return match;
		};

		let filtered = [];

		if (filterCategories.length > 0)
			filtered = products.filter((item) =>
				filterCategories.includes(item.category)
			);

		if (filterBrands.length > 0) {
			if (filtered.length > 0) {
				filtered = filtered.filter((item) => checkBrands(item.affiliation));
			} else {
				filtered = products.filter((item) => checkBrands(item.affiliation));
			}
		}

		if (filterBrands.length > 0 || filterCategories.length > 0)
			setFilter(filtered);
		else setFilter(products);
	}, [filterCategories, filterBrands]);

	const onFilterCat = (event) => {
		let temp = filterCategories;

		if (event.target.checked) {
			temp = [...temp, event.target.value];
		} else {
			const index = filterCategories.findIndex(
				(item) => item === event.target.value
			);

			temp.splice(index, 1);
		}

		setCategories([...temp]);
	};

	const onFilterBrands = (event) => {
		let temp = filterBrands;

		if (event.target.checked) temp = [...temp, event.target.value];
		else {
			const index = filterBrands.findIndex(
				(item) => item === event.target.value
			);

			temp.splice(index, 1);
		}

		setBrands([...temp]);
	};

	return (
		<Card>
			<Card.Body>
				<Card.Title>Filter</Card.Title>
				<Form>
					<Form.Group>
						<Form.Label>Kategori</Form.Label>
						{categories.map((item, i) => (
							<Form.Check
								type="checkbox"
								label={item}
								value={item}
								onChange={(e) => onFilterCat(e)}
							/>
						))}
					</Form.Group>
					<Form.Group>
						<Form.Label>Merke</Form.Label>
						{brands.map((item) => (
							<Form.Check
								type="checkbox"
								label={item}
								value={item}
								onChange={(e) => onFilterBrands(e)}
							/>
						))}
					</Form.Group>
				</Form>
			</Card.Body>
		</Card>
	);
};

export default CardFilter;
