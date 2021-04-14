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
			<tr>
				{keys.map((key, i) => (
					<th key={i}>{key}</th>
				))}
			</tr>
			{values.map((item, i) => (
				<tr key={i}>
					{keys.map((key, j) => (
						<td key={j}>{item[key]}</td>
					))}
					{loggedIn ? (
						<Button className="btn-danger" onClick={() => removeValue(name, i)}>
							X
						</Button>
					) : null}
				</tr>
			))}
		</table>
	) : null;
};

TableList.defaultProps = {
	values: [],
  };

export default TableList;
