import { useContext, useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import { LoggedInContext } from '../contexts/LoggedInContext';

const TableList = ({ values, removeValue, name }) => {
	const [keys, setKeys] = useState(null);

	const loggedIn = useContext(LoggedInContext);

	useEffect(() => {
		if (values.length > 0) setKeys(Object.keys(values[0]));
	}, [values]);

	return keys ? (
		<table>
			<thead>
				<tr>
					{keys.map((key, i) => (
						<th key={i}>{key}</th>
					))}
				</tr>
			</thead>
			<tbody>
				{values.map((item, i) => (
					<tr key={i}>
						{keys.map((key, j) => (
							<td key={j} style={{ whiteSpace: 'pre-line' }}>
								{item[key]}
							</td>
						))}

						{loggedIn ? (
							<td>
								<Button
									className="btn-danger"
									onClick={() => removeValue(name, i)}>
									X
								</Button>
							</td>
						) : null}
					</tr>
				))}
			</tbody>
		</table>
	) : null;
};

TableList.defaultProps = {
	values: [],
};

export default TableList;
